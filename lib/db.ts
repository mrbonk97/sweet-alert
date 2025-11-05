// src/lib/db.ts
import oracledb from "oracledb";

declare global {
  var oraclePool: oracledb.Pool | undefined;
}

export async function getPool() {
  // 이미 생성되어 있고, 닫히지 않았다면 재사용
  if (global.oraclePool && global.oraclePool.status !== oracledb.POOL_STATUS_CLOSED) {
    return global.oraclePool;
  }

  // 새 풀 생성
  console.log("Creating new Oracle connection pool");
  global.oraclePool = await oracledb.createPool({
    user: process.env.ORACLEDB_USER!,
    password: process.env.ORACLEDB_PASSWORD!,
    connectString: process.env.ORACLEDB_CONNECTIONSTRING!,
    poolMin: 1,
    poolMax: 10,
    poolIncrement: 1,
    queueTimeout: 10000, // 10초 안에 못 빌리면 에러
    stmtCacheSize: 30,
  });

  console.log("Oracle connection pool created");
  return global.oraclePool;
}

// graceful shutdown
process.on("SIGTERM", async () => {
  if (global.oraclePool) {
    console.log("Closing Oracle pool (SIGTERM)");
    await global.oraclePool.close(10);
    console.log("Oracle pool closed");
  }
});

export async function clobToString(lob: any): Promise<string> {
  return new Promise((resolve, reject) => {
    if (lob === null) return resolve("");
    let str = "";
    lob.setEncoding("utf8");
    lob.on("data", (chunk: string) => (str += chunk));
    lob.on("end", () => resolve(str));
    lob.on("error", reject);
  });
}

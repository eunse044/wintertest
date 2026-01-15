import axios from "axios";

const BASE = "https://my-open-vlzwqdz1s-haeuns-projects-0cf7b020.vercel.app/";

async function main() {
  try {
    // ✅ GET
    const res = await axios.get(`${BASE}/api/users`);
    console.log("GET res.data =", res.data);

    // ✅ POST
    const reqBody = { name: "haeun", age: 25 };
    const res2 = await axios.post(`${BASE}/api/users`, reqBody);
    console.log("POST res.data =", res2.data);
  } catch (err) {
    // ✅ axios 에러 처리 패턴 (실무에서 많이 씀)
    if (err.response) {
      console.log("❌ 서버가 응답했지만 에러");
      console.log("status:", err.response.status);
      console.log("data:", err.response.data);
    } else if (err.request) {
      console.log("❌ 요청은 갔는데 응답이 없음");
      console.log(err.request);
    } else {
      console.log("❌ 요청 설정/코드 에러");
      console.log(err.message);
    }
  }
}

main();

import { ImageResponse } from "next/og";

export const alt = "나두연표 · 그때 한반도는?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const title = "나두연표";
  const sub = "세계에서 무슨 일이 날 때, 한반도는 어땠을까";
  const font = await loadFont(`${title}${sub}NADOO TIMELINE 한반도 그리스 로마 이집트 페르시아`);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f3eee6",
          color: "#241c16",
          padding: "72px",
          borderTop: "18px solid #1d4f3a",
          borderBottom: "18px solid #a34732",
          fontFamily: font ? "NotoSerifKR" : "serif",
        }}
      >
        <div style={{ color: "#a34732", fontSize: 28, letterSpacing: 8 }}>NADOO TIMELINE</div>
        <div style={{ marginTop: 20, fontSize: 92 }}>{title}</div>
        <div style={{ marginTop: 18, fontSize: 34, color: "#6e6258" }}>{sub}</div>
        <div style={{ marginTop: 36, display: "flex", gap: 16, fontSize: 26 }}>
          <span style={{ color: "#1d4f3a" }}>한반도</span>
          <span style={{ color: "#1a5278" }}>그리스</span>
          <span style={{ color: "#a34732" }}>로마</span>
          <span style={{ color: "#0f5e5c" }}>이집트</span>
          <span style={{ color: "#6b3a5d" }}>페르시아</span>
        </div>
      </div>
    ),
    {
      ...size,
      ...(font ? { fonts: [{ name: "NotoSerifKR", data: font, weight: 700 as const, style: "normal" as const }] } : {}),
    },
  );
}

/* ============================================================
 *  config.js — 店舗カスタマイズ設定ファイル
 *  このファイルを差し替えるだけで店舗ごとのテーマを変更可能
 * ============================================================ */

/* ---------- Firebase設定 ---------- */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyChmrcb034LPNghWBOUiPcLi0aBfFuy2t0",
  authDomain: "shift-managerpj.firebaseapp.com",
  databaseURL: "https://shift-managerpj-default-rtdb.firebaseio.com",
  projectId: "shift-managerpj",
  storageBucket: "shift-managerpj.firebasestorage.app",
  messagingSenderId: "267116814790",
  appId: "1:267116814790:web:e91795322d05e3f5b412c7"
};

/* ---------- 店舗設定 ---------- */
const STORE_CONFIG = {
  storeId: "demo_store",
  storeName: "Club Example",
  logoUrl: "",                 /* ロゴ画像URL（空なら店舗名をテキスト表示） */

  /* --- テーマカラー --- */
  accentColor: "#c8a876",      /* ゴールド系アクセント */
  accentColorLight: "#f5eedd", /* アクセント淡色（バッジ背景等） */
  accentColorDark: "#8b7355",  /* アクセント暗色（ホバー等） */
  bgPrimary: "#0f0f1a",       /* ページ背景 */
  bgSecondary: "#1a1a2e",     /* セクション背景 */
  bgCard: "#16213e",          /* カード背景 */
  textPrimary: "#eaeaea",     /* 主要テキスト */
  textSecondary: "#9a9ab0",   /* 補助テキスト */
  borderColor: "#2a2a4a",     /* ボーダー */
  successColor: "#4caf50",    /* 成功・提出済み */
  warningColor: "#ff9800",    /* 警告・遅延 */
  dangerColor: "#ef5350",     /* エラー・緊急 */

  /* --- フォント --- */
  fontFamily: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif"
};

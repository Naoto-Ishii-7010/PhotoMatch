---
name: PhotoMatch Design System

tokens:
  colors:
    primary: "#8A6A3A"
    accent: "#D85C3A"
    sub_accent: "#D4A955"
    base: "#FAF6EF"
    text: "#2A2520"

    role:
      photographer: "#2D6B63"
      requester: "#C47A2E"

    neutral:
      50: "#FAF6EF"
      100: "#F2EDE5"
      200: "#E4DDD2"
      300: "#CFC6B8"
      400: "#B3A899"
      500: "#8C8173"
      600: "#6B6156"
      700: "#4F463E"
      800: "#3A332C"
      900: "#2A2520"

  typography:
    font_family:
      base: "'Noto Sans JP', system-ui, sans-serif"
      heading: "'Noto Sans JP', system-ui, sans-serif"

    scale:
      xs: "12px"
      sm: "14px"
      md: "16px"
      lg: "20px"
      xl: "24px"
      xxl: "32px"

    weight:
      regular: 400
      medium: 500
      bold: 700

  spacing:
    xs: "4px"
    sm: "8px"
    md: "16px"
    lg: "24px"
    xl: "32px"
    xxl: "48px"

  radius:
    sm: "6px"
    md: "10px"
    lg: "16px"
    xl: "24px"

  shadow:
    sm: "0 1px 2px rgba(0,0,0,0.04)"
    md: "0 4px 12px rgba(0,0,0,0.08)"
    lg: "0 12px 24px rgba(0,0,0,0.12)"
---

## Overview

PhotoMatchは、写真撮影を依頼したいユーザーとフォトグラファーをつなぐC2Cマッチングサービスである。

本デザインシステムは以下の価値を同時に実現することを目的とする：

- 安心して依頼できる信頼性
- 気軽に使える親しみやすさ
- 写真の魅力を最大化する視覚体験

---

## Design Principles

### 1. Trust First, But Not Heavy

信頼性を最優先とするが、堅すぎるUIにはしない。  
余白・整列・控えめな色使いで安心感を出しつつ、操作は軽くする。

---

### 2. Photography is the Hero

写真が主役である。  
UIは写真を邪魔せず、引き立てる役割に徹する。

- 不必要な装飾は避ける
- 画像カードは大きめに扱う
- テキストよりビジュアル優先

---

### 3. Calm Warmth

温かみのある落ち着いたトーンを維持する。

- ブラウン系を基調とした安心感
- ビビッドすぎないアクセントカラー
- ナチュラルな余白設計

---

### 4. Clear Interaction

ユーザーの状態を明確にする。

- 「募集中 / 進行中 / 完了」など状態を視覚的に区別
- ボタン・アクションは迷わせない
- 次に何をすべきか常に明確

---

## Colors

### Primary

ブランドの基調色。信頼と落ち着きを表現する。

### Accent

CTAや重要アクションに使用。  
注意喚起や「行動」を促す役割。

### Sub Accent

補助的な強調。バッジやタグなどに使用。

### Role Colors

ユーザーの役割を視覚的に識別する。

- フォトグラファー：落ち着いたグリーン
- 依頼者：暖色寄りのブラウン

---

## Typography

- 日本語可読性を最優先
- 行間はやや広め（1.6推奨）
- 見出しは太すぎない（medium〜bold）

---

## Layout

### 基本ルール

- モバイルファースト
- 1カラム中心
- 最大幅：720px目安

### 余白

- セクション間：xl
- コンポーネント間：md
- テキスト間：sm

---

## Components

### Button

#### Primary Button

- 背景：primary
- 文字：白
- 用途：主要アクション（依頼、提案送信など）

#### Secondary Button

- 枠線：primary
- 背景：透明
- 用途：補助アクション

#### Danger Button

- 背景：accent
- 用途：キャンセル、削除

---

### Card

#### Photo Card

最重要コンポーネント。

- 画像：上部または全面
- 角丸：lg
- hoverで軽い浮き

#### Photographer Card

- アイコン
- 表示名
- 対応ジャンル
- サンプル写真

---

### Tag / Badge

用途：

- 撮影ジャンル
- 状態表示
- 役割識別

---

### Status Indicator

状態は必ず色＋テキストで表現する：

- 募集中：sub_accent
- 提案中：primary
- 進行中：accent
- 完了：neutral-400
- キャンセル：neutral-300

---

### Input

- 角丸：md
- フォーカス時：primaryカラーのアウトライン
- エラー時：accent

---

## Imagery

### 画像の扱い

- できるだけトリミングしない
- アスペクト比を維持
- サムネイルは統一比率（例：4:3 or 1:1）

### NG

- 過度なフィルター
- UIより目立つ装飾

---

## Motion

- 過度なアニメーションは使わない
- hover / tap のフィードバックは必須
- duration：150〜250ms

---

## Accessibility

- コントラスト比を確保
- 色だけで状態を表現しない
- タップ領域は最低44px

---

## Tone of Voice

- 丁寧だが堅すぎない
- ユーザー同士の距離感を意識
- 命令口調は避ける

例：

- ❌「入力してください」
- ✅「入力をお願いします」

---

## Future Considerations

- レビュー機能追加時の評価表現
- 決済導入時の安心UI強化
- 本人確認バッジの設計

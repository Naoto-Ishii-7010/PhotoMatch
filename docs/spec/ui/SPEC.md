# 画面仕様概要

## 1. 目的

このディレクトリでは、`PhotoMatch` の画面単位の UI 仕様を管理する。
機能要件や業務ルールは `../domain` 配下に分離し、ここでは以下を扱う。

- 画面の役割
- 画面遷移
- レイアウト構成
- UI 要素
- ユーザー操作と表示ルール

---

## 2. 画面分類

現時点では `"/"` と `"/lp"` のみ実装済みであり、それ以外は機能仕様をもとにした未実装画面案として定義する。

### 公開画面

| 画面ID | 画面名               | 想定ルート                        | 状態     | 個別仕様                                                   |
| ------ | -------------------- | --------------------------------- | -------- | ---------------------------------------------------------- |
| UI-001 | ルートホーム（暫定） | `/`                               | 実装済み | [home/SPEC.md](home/SPEC.md)                               |
| UI-002 | LP                   | `/lp`                             | 実装済み | [lp/SPEC.md](lp/SPEC.md)                                   |
| UI-101 | 新規登録             | `/auth/register`                  | 未実装   | [auth-register/SPEC.md](auth-register/SPEC.md)             |
| UI-102 | ログイン             | `/auth/login`                     | 未実装   | [auth-login/SPEC.md](auth-login/SPEC.md)                   |
| UI-201 | フォトグラファー検索 | `/search`                         | 未実装   | [search/SPEC.md](search/SPEC.md)                           |
| UI-202 | フォトグラファー詳細 | `/photographers/[photographerId]` | 未実装   | [photographer-detail/SPEC.md](photographer-detail/SPEC.md) |

### 一般会員向け画面

| 画面ID | 画面名             | 想定ルート                     | 状態   | 個別仕様                                                       |
| ------ | ------------------ | ------------------------------ | ------ | -------------------------------------------------------------- |
| UI-301 | プロフィール編集   | `/mypage/profile`              | 未実装 | [profile-edit/SPEC.md](profile-edit/SPEC.md)                   |
| UI-302 | ポートフォリオ管理 | `/mypage/portfolio`            | 未実装 | [portfolio-manage/SPEC.md](portfolio-manage/SPEC.md)           |
| UI-303 | フォロー一覧       | `/mypage/follows`              | 未実装 | [follow-list/SPEC.md](follow-list/SPEC.md)                     |
| UI-401 | 指名依頼作成       | `/direct-requests/new`         | 未実装 | [direct-request-form/SPEC.md](direct-request-form/SPEC.md)     |
| UI-402 | 指名依頼詳細       | `/direct-requests/[requestId]` | 未実装 | [direct-request-detail/SPEC.md](direct-request-detail/SPEC.md) |
| UI-501 | 公募作成           | `/jobs/new`                    | 未実装 | [open-request-create/SPEC.md](open-request-create/SPEC.md)     |
| UI-502 | 公募詳細           | `/jobs/[jobId]`                | 未実装 | [open-request-detail/SPEC.md](open-request-detail/SPEC.md)     |
| UI-503 | 提案一覧・比較     | `/jobs/[jobId]/proposals`      | 未実装 | [proposal-list/SPEC.md](proposal-list/SPEC.md)                 |
| UI-504 | 提案作成           | `/jobs/[jobId]/proposals/new`  | 未実装 | [proposal-form/SPEC.md](proposal-form/SPEC.md)                 |
| UI-601 | 案件検索           | `/jobs`                        | 未実装 | [job-search/SPEC.md](job-search/SPEC.md)                       |
| UI-701 | チャット一覧       | `/chats`                       | 未実装 | [chat-list/SPEC.md](chat-list/SPEC.md)                         |
| UI-702 | チャットルーム     | `/chats/[chatId]`              | 未実装 | [chat-room/SPEC.md](chat-room/SPEC.md)                         |
| UI-801 | 通知一覧           | `/notifications`               | 未実装 | [notifications/SPEC.md](notifications/SPEC.md)                 |

### 管理画面

| 画面ID | 画面名           | 想定ルート                  | 状態   | 個別仕様                                                   |
| ------ | ---------------- | --------------------------- | ------ | ---------------------------------------------------------- |
| UI-901 | 管理ユーザー一覧 | `/admin/users`              | 未実装 | [admin-user-list/SPEC.md](admin-user-list/SPEC.md)         |
| UI-902 | 管理ユーザー詳細 | `/admin/users/[userId]`     | 未実装 | [admin-user-detail/SPEC.md](admin-user-detail/SPEC.md)     |
| UI-903 | 管理通報一覧     | `/admin/reports`            | 未実装 | [admin-report-list/SPEC.md](admin-report-list/SPEC.md)     |
| UI-904 | 管理通報詳細     | `/admin/reports/[reportId]` | 未実装 | [admin-report-detail/SPEC.md](admin-report-detail/SPEC.md) |

---

## 3. 共通 UI ルール

### レイアウト

- 全画面で `app/layout.tsx` を通じて `html` は `lang="ja"` を使用する
- `body` は縦積みレイアウトとし、画面全体を `min-h-full` で構成する
- フォントは `Geist`、`Geist Mono`、`Noto Serif JP`、`Zen Kaku Gothic New`、`Playfair Display` を読み込む

### 画面構成の前提

- 現在の UI は公開導線の検証段階であり、認証後画面は未実装
- `/lp` は専用レイアウトを持ち、共通ヘッダーとフッターを表示する
- `/` は Next.js 初期テンプレートの暫定画面であり、サービス固有 UI ではない
- 未実装画面のルートは画面仕様上の想定値であり、実装時に変更の余地がある

### レスポンシブ

- PC とモバイルの双方で利用しやすいレスポンシブレイアウトを基本とする
- LP の主要セクションは `max-w-[1200px]` を基本幅とし、ブレークポイントで段組みを切り替える
- LP ヘッダーナビゲーションは画面幅に応じて表示方法を切り替え、PC とモバイルの双方で主要導線へ到達できるようにする

---

## 4. UI と機能仕様の対応

| 画面                                  | 主に参照する機能仕様                                                                                                                                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ルートホーム（暫定）                  | なし                                                                                                                                                                                                                 |
| LP                                    | [新規登録・ログイン](../domain/auth/SPEC.md)、[検索](../domain/search/SPEC.md)、[指名型依頼](../domain/direct-request/SPEC.md)、[公募型依頼](../domain/open-request/SPEC.md)、[通知](../domain/notification/SPEC.md) |
| 新規登録 / ログイン                   | [新規登録・ログイン](../domain/auth/SPEC.md)                                                                                                                                                                         |
| プロフィール編集                      | [プロフィール管理](../domain/profile/SPEC.md)                                                                                                                                                                        |
| ポートフォリオ管理                    | [ポートフォリオ管理](../domain/portfolio/SPEC.md)                                                                                                                                                                    |
| フォトグラファー検索 / 詳細           | [検索](../domain/search/SPEC.md)、[フォロー](../domain/follow/SPEC.md)、[指名型依頼](../domain/direct-request/SPEC.md)                                                                                               |
| 指名依頼作成 / 詳細                   | [指名型依頼](../domain/direct-request/SPEC.md)、[チャット](../domain/chat/SPEC.md)、[通知](../domain/notification/SPEC.md)                                                                                           |
| 公募作成 / 詳細 / 提案一覧 / 提案作成 | [公募型依頼・提案比較・選択](../domain/open-request/SPEC.md)、[案件検索](../domain/job-search/SPEC.md)                                                                                                               |
| 案件検索                              | [案件検索](../domain/job-search/SPEC.md)                                                                                                                                                                             |
| チャット一覧 / チャットルーム         | [チャット](../domain/chat/SPEC.md)、[通知](../domain/notification/SPEC.md)                                                                                                                                           |
| 通知一覧                              | [通知](../domain/notification/SPEC.md)                                                                                                                                                                               |
| 管理画面                              | [運営管理](../domain/admin/SPEC.md)                                                                                                                                                                                  |

---

## 5. 現状の制約

- LP 上の `/auth/login`、`/auth/register` は導線のみ存在し、対応画面は未実装
- LP 内の一部カードやフッターリンクは `#` のダミーリンクである
- LP 内の紹介データ、実績値、FAQ はすべて静的コンテンツである
- 認証後画面、案件系画面、管理画面はまだコード上に存在しない
- そのため、本ディレクトリの未実装画面仕様は MVP の実装指針として扱う

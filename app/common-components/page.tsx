import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import Textarea from "@/components/ui/Textarea";
import PhotoCardDemo from "./_components/PhotoCardDemo";
import FormInputDemo from "./_components/FormInputDemo";
import TextareaDemo from "./_components/TextareaDemo";
import ModalDemo from "./_components/ModalDemo";

export const metadata: Metadata = {
  title: "共通コンポーネント | PhotoMatch",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="border-b border-[rgba(210,196,182,0.4)] pb-2">
        <h2 className="text-xl font-bold text-lp-ink">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function VariantGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-bold tracking-widest text-lp-ink-muted uppercase">
        {label}
      </p>
      <div className="bg-[#fff8f3] rounded-xl p-6 flex flex-wrap gap-4 items-start">
        {children}
      </div>
    </div>
  );
}

const SAMPLE_PHOTOS = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop&q=80",
    badge: "ポートレート",
    title: "Golden Hour Session",
    photographer: "By Yuki Tanaka",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&q=80",
    badge: "ウェディング",
    title: "Spring Wedding Shoot",
    photographer: "By Hana Sato",
    initialLiked: true,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80",
    title: "Mountain Landscape",
    photographer: "By Kenji Mori",
  },
];

export default function CommonComponentsPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(90deg, rgb(250, 246, 239) 0%, rgb(250, 246, 239) 100%)",
      }}
    >
      {/* ページヘッダー */}
      <header className="sticky top-0 z-10 backdrop-blur-[6px] bg-[rgba(255,242,226,0.8)] border-b border-[rgba(210,196,182,0.3)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-4">
          <span className="text-xl font-bold text-lp-brand">PhotoMatch</span>
          <span className="text-lp-ink-muted">/</span>
          <span className="text-base font-bold text-lp-ink">
            Design System Components
          </span>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col gap-14">
        {/* ============================================================
            1. Button
        ============================================================ */}
        <Section title="Button">
          <VariantGroup label="primary — 主要アクション">
            <Button variant="primary">Book Photographer</Button>
            <Button variant="primary" disabled>
              Book Photographer（disabled）
            </Button>
          </VariantGroup>

          <VariantGroup label="secondary — サブアクション">
            <Button variant="secondary">View Portfolio</Button>
            <Button variant="secondary" disabled>
              View Portfolio（disabled）
            </Button>
          </VariantGroup>

          <VariantGroup label="danger — 削除・キャンセル系">
            <Button variant="danger">Cancel Request</Button>
            <Button variant="danger" disabled>
              Cancel Request（disabled）
            </Button>
          </VariantGroup>

          <VariantGroup label="全バリアント比較">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </VariantGroup>
        </Section>

        {/* ============================================================
            2. FormInput
        ============================================================ */}
        <Section title="FormInput">
          <VariantGroup label="default — 初期状態">
            <div className="w-full max-w-sm">
              <FormInput
                id="demo-default"
                label="場所"
                placeholder="都市名または地域を入力"
                readOnly
              />
            </div>
          </VariantGroup>

          <VariantGroup label="with value — 入力済み（フォーカスで枠が変化）">
            <div className="w-full max-w-sm">
              <FormInput
                id="demo-filled"
                label="場所"
                defaultValue="Tokyo, Japan"
                placeholder="都市名または地域を入力"
              />
            </div>
          </VariantGroup>

          <VariantGroup label="error — バリデーションエラー">
            <div className="w-full max-w-sm">
              <FormInput
                id="demo-error"
                label="場所"
                defaultValue="Invalid Location!"
                error="場所が見つかりませんでした。"
                readOnly
              />
            </div>
          </VariantGroup>

          <VariantGroup label="interactive — 空のままボタンを押すとエラー表示">
            <div className="w-full max-w-sm">
              <FormInputDemo />
            </div>
          </VariantGroup>
        </Section>

        {/* ============================================================
            3. Textarea
        ============================================================ */}
        <Section title="Textarea">
          <VariantGroup label="default — 初期状態">
            <div className="w-full max-w-sm">
              <Textarea
                id="textarea-default"
                label="自己紹介"
                placeholder="あなたのプロフィールを入力してください"
                readOnly
              />
            </div>
          </VariantGroup>

          <VariantGroup label="with value — 入力済み（フォーカスで枠が変化）">
            <div className="w-full max-w-sm">
              <Textarea
                id="textarea-filled"
                label="自己紹介"
                defaultValue="東京を拠点に活動しているフリーランスフォトグラファーです。自然光を活かした柔らかいポートレートや、飾らない家族写真の撮影を得意としています。"
              />
            </div>
          </VariantGroup>

          <VariantGroup label="error — バリデーションエラー">
            <div className="w-full max-w-sm">
              <Textarea
                id="textarea-error"
                label="自己紹介"
                defaultValue=""
                error="自己紹介を入力してください。"
                readOnly
              />
            </div>
          </VariantGroup>

          <VariantGroup label="interactive — 空のままボタンを押すとエラー表示">
            <div className="w-full max-w-sm">
              <TextareaDemo />
            </div>
          </VariantGroup>
        </Section>

        {/* ============================================================
            4. Modal
        ============================================================ */}
        <Section title="Modal">
          <VariantGroup label="size sm / md / lg（ESC・背景クリックでも閉じる）">
            <ModalDemo
              title="予約確認"
              description="撮影セッションを予約します。この操作は確定後に変更できます。よろしいですか？"
              size="sm"
            />
            <ModalDemo
              title="ポートフォリオ詳細"
              description="Yuki Tanaka のポートフォリオ「Golden Hour Session」の詳細です。東京都内での撮影実績が多数あります。撮影スタイルは自然光を活かした柔らかい表現が特徴です。"
              size="md"
            />
            <ModalDemo
              title="キャンセルポリシー"
              description="撮影日の3日前までのキャンセルは全額返金されます。2日前から当日のキャンセルは撮影料金の50%がキャンセル料として発生します。撮影当日の無断キャンセルは全額キャンセル料が発生しますのでご注意ください。"
              size="lg"
            />
          </VariantGroup>

          <VariantGroup label="footer なし">
            <ModalDemo
              title="お知らせ"
              description="新しいメッセージが届いています。メッセージ一覧から確認してください。"
              size="md"
              hasFooter={false}
            />
          </VariantGroup>
        </Section>

        {/* ============================================================
            5. PhotoCard
        ============================================================ */}
        <Section title="PhotoCard">
          <VariantGroup label="各パターン（いいねボタンはトグル可能）">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {SAMPLE_PHOTOS.map((photo) => (
                <PhotoCardDemo key={photo.title} {...photo} />
              ))}
            </div>
          </VariantGroup>
        </Section>
      </main>
    </div>
  );
}

import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="px-8 md:px-16 lg:px-24 pt-12 pb-8">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="opacity-90">雅集</div>
          <div className="flex gap-12 opacity-70">
            <button className="hover:opacity-100 transition-opacity">作品</button>
            <button className="hover:opacity-100 transition-opacity">关于</button>
            <button className="hover:opacity-100 transition-opacity">联系</button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetric Layout */}
      <main className="px-8 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          {/* Main Feature */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-32 mt-16">
            {/* Left: Large Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1626897885636-dd68020cc52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5JTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NjgyNTYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Editorial feature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Editorial Text */}
            <div className="lg:col-span-5 flex flex-col justify-center lg:pl-8">
              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground mb-8 tracking-widest opacity-60">
                    创刊号 / 2026 年春
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                    宁静之美
                  </h1>
                  <div className="w-16 h-[1px] bg-foreground/20 mb-8"></div>
                </div>
                <p className="text-lg opacity-80 max-w-md">
                  探索当代设计中的极简主义美学，从东方哲学中汲取灵感，重新审视空间、光线与形态之间的微妙关系。
                </p>
                <button className="inline-block border border-foreground/20 px-8 py-3 hover:bg-foreground/5 transition-colors mt-4">
                  深入阅读
                </button>
              </div>
            </div>
          </section>

          {/* Featured Articles - Asymmetric Grid */}
          <section className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
              {/* Small Image Left */}
              <div className="md:col-span-5">
                <div className="mb-20">
                  <div className="relative aspect-[3/4] mb-6">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1765036493112-d17beb709518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc3RpbGwlMjBsaWZlJTIwY29tcG9zaXRpb258ZW58MXx8fHwxNzc2ODI1NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Editorial piece"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl mb-4">物之诗意</h3>
                  <p className="opacity-70 mb-6">
                    日常器物中蕴含的东方美学精神，以及如何通过设计让传统与现代交融。
                  </p>
                  <a href="#" className="opacity-50 hover:opacity-100 transition-opacity tracking-wider">
                    了解更多 →
                  </a>
                </div>
              </div>

              {/* Text Content Right */}
              <div className="md:col-span-7 md:pl-12 space-y-20">
                <div className="pt-0 md:pt-32">
                  <p className="text-muted-foreground mb-6 tracking-widest opacity-60">
                    专题
                  </p>
                  <h2 className="text-3xl md:text-4xl mb-8 max-w-lg">
                    留白的艺术：东方美学的当代表达
                  </h2>
                  <p className="text-lg opacity-80 max-w-xl mb-8">
                    在快节奏的现代生活中，留白不仅是一种视觉语言，更是一种生活哲学。我们探讨如何在设计中运用留白，创造呼吸感与平衡感。
                  </p>
                  <div className="flex gap-6 opacity-60">
                    <span>王明远</span>
                    <span>·</span>
                    <span>2026 年 4 月</span>
                  </div>
                </div>

                <div className="border-t border-foreground/10 pt-12">
                  <h3 className="text-2xl mb-4">光影对话</h3>
                  <p className="opacity-70 max-w-lg mb-6">
                    自然光线如何塑造空间的气质，以及建筑师如何通过光影的变化讲述时间的故事。
                  </p>
                  <a href="#" className="opacity-50 hover:opacity-100 transition-opacity tracking-wider">
                    查看作品 →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Full Width Image Section */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-muted-foreground mb-6 tracking-widest opacity-60">
                  空间系列
                </p>
                <h2 className="text-3xl md:text-4xl mb-8">
                  极简空间的温度
                </h2>
                <p className="text-lg opacity-80 mb-8">
                  当代极简主义并非冷漠的代名词。通过材质的选择、光线的运用以及细节的把控，空间可以在简约中传递温暖。
                </p>
                <div className="space-y-4 opacity-70">
                  <div className="flex items-start gap-4">
                    <span className="text-muted-foreground mt-1">01</span>
                    <div>
                      <h4 className="mb-2">材质语言</h4>
                      <p className="opacity-80">木材、石材、织物的自然质感</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-muted-foreground mt-1">02</span>
                    <div>
                      <h4 className="mb-2">光线设计</h4>
                      <p className="opacity-80">柔和光线营造的舒适氛围</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-muted-foreground mt-1">03</span>
                    <div>
                      <h4 className="mb-2">细节考量</h4>
                      <p className="opacity-80">每一处转角的精心设计</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/5]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1625405062688-3cfb0b769364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBhcmNoaXRlY3R1cmUlMjBsaWdodHxlbnwxfHx8fDE3NzY4MjU2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Minimalist interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <section className="mb-32 py-20 border-y border-foreground/10">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl opacity-90 mb-8">
                "真正的简约不是删减，而是在恰当的时刻，放置恰当的事物。"
              </blockquote>
              <cite className="not-italic opacity-60 tracking-wider">— 原研哉</cite>
            </div>
          </section>

          {/* Footer */}
          <footer className="pb-16 pt-8 border-t border-foreground/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h4 className="mb-6 opacity-90">订阅</h4>
                <p className="opacity-60 mb-6">
                  获取最新的设计与美学资讯
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="邮箱地址"
                    className="flex-1 border-b border-foreground/20 bg-transparent pb-2 outline-none focus:border-foreground/40 transition-colors"
                  />
                  <button className="opacity-60 hover:opacity-100 transition-opacity">
                    →
                  </button>
                </div>
              </div>

              <div>
                <h4 className="mb-6 opacity-90">探索</h4>
                <nav className="space-y-3 opacity-60">
                  <div><a href="#" className="hover:opacity-100 transition-opacity">建筑</a></div>
                  <div><a href="#" className="hover:opacity-100 transition-opacity">产品</a></div>
                  <div><a href="#" className="hover:opacity-100 transition-opacity">艺术</a></div>
                  <div><a href="#" className="hover:opacity-100 transition-opacity">生活方式</a></div>
                </nav>
              </div>

              <div>
                <h4 className="mb-6 opacity-90">关注</h4>
                <nav className="space-y-3 opacity-60">
                  <div><a href="#" className="hover:opacity-100 transition-opacity">微信</a></div>
                  <div><a href="#" className="hover:opacity-100 transition-opacity">微博</a></div>
                  <div><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></div>
                  <div><a href="#" className="hover:opacity-100 transition-opacity">Newsletter</a></div>
                </nav>
              </div>
            </div>

            <div className="flex justify-between items-center opacity-40 text-sm pt-8">
              <div>© 2026 雅集. 保留所有权利.</div>
              <div className="flex gap-8">
                <a href="#" className="hover:opacity-100 transition-opacity">隐私政策</a>
                <a href="#" className="hover:opacity-100 transition-opacity">使用条款</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

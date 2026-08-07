export default function Projects() {
    const projects = [
      {
        title: "Сайт ресторана",
        description:
          "Современный лендинг для ресторана с меню, фотографиями и формой бронирования.",
        tech: "Next.js • Tailwind CSS",
      },
      {
        title: "Интернет-магазин",
        description:
          "Быстрый магазин с удобным каталогом товаров и современным дизайном.",
        tech: "React • TypeScript",
      },
      {
        title: "Корпоративный сайт",
        description:
          "Сайт компании для привлечения клиентов и презентации услуг.",
        tech: "Next.js • AI",
      },
    ];
  
    return (
        <section
        id="projects"
        className="w-full max-w-6xl py-32 scroll-mt-24"
      >
  
        <div className="text-center mb-16">
  
          <h2 className="text-4xl font-bold">
            Мои работы
          </h2>
  
          <p className="mt-4 text-zinc-400">
            Примеры проектов и решений, которые я создаю
          </p>
  
        </div>
  
  
        <div className="grid md:grid-cols-3 gap-8">
  
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                rounded-3xl
                border border-zinc-800
                bg-zinc-950
                p-8
                hover:-translate-y-2
                hover:border-zinc-600
                transition
              "
            >
  
              <div className="h-40 rounded-2xl bg-zinc-900 mb-6 flex items-center justify-center">
                <span className="text-zinc-500">
                  Preview
                </span>
              </div>
  
  
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>
  
  
              <p className="text-zinc-400 mb-5">
                {project.description}
              </p>
  
  
              <p className="text-sm text-zinc-500">
                {project.tech}
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }
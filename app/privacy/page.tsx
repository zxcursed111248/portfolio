export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <a
            href="/"
            className="inline-flex text-sm text-zinc-500 transition hover:text-white"
          >
            ← Вернуться на сайт
          </a>
  
          <div className="mt-16">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">
              Legal
            </p>
  
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Политика конфиденциальности
            </h1>
  
            <p className="mt-6 text-sm text-zinc-500">
              Последнее обновление: 12 августа 2026 года
            </p>
          </div>
  
          <div className="mt-16 space-y-12 text-base leading-8 text-zinc-400">
            <section>
              <h2 className="text-2xl font-semibold text-white">
                1. Общие положения
              </h2>
  
              <p className="mt-4">
                Настоящая политика конфиденциальности описывает порядок
                обработки персональных данных пользователей сайта AI Web
                Studio.
              </p>
  
              <p className="mt-4">
                Оператором персональных данных является Бабель Г.А.,
                частное лицо, г. Уфа, Российская Федерация.
              </p>
  
              <p className="mt-4">
                Для связи по вопросам обработки персональных данных:
                <a
                  href="mailto:babelgleb182009@gmail.com"
                  className="ml-1 text-white underline underline-offset-4"
                >
                  babelgleb182009@gmail.com
                </a>
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white">
                2. Какие данные мы получаем
              </h2>
  
              <p className="mt-4">
                При заполнении формы обратной связи на сайте пользователь
                может предоставить следующие данные:
              </p>
  
              <ul className="mt-4 space-y-2 pl-5">
                <li className="list-disc">имя;</li>
                <li className="list-disc">адрес электронной почты;</li>
                <li className="list-disc">
                  текст сообщения и сведения, которые пользователь
                  добровольно указывает в сообщении.
                </li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white">
                3. Цели обработки данных
              </h2>
  
              <p className="mt-4">
                Персональные данные используются для обработки обращений
                пользователей, связи с потенциальными клиентами,
                обсуждения задач проекта и подготовки ответа на запрос.
              </p>
  
              <p className="mt-4">
                Данные не используются для рассылки рекламных сообщений
                без соответствующего основания.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white">
                4. Передача данных
              </h2>
  
              <p className="mt-4">
                Данные, отправленные через форму обратной связи, передаются
                на серверную часть сайта для обработки заявки.
              </p>
  
              <p className="mt-4">
                Для получения уведомлений о новых заявках используется
                Telegram Bot API. Содержание отправленной пользователем
                заявки передаётся в Telegram на аккаунт/чат,
                предназначенный для обработки заявок.
              </p>
  
              <p className="mt-4">
                Telegram самостоятельно определяет правила обработки
                данных в рамках своей инфраструктуры. Подробнее можно
                ознакомиться с политикой конфиденциальности Telegram.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white">
                5. Хранение данных
              </h2>
  
              <p className="mt-4">
                Персональные данные хранятся только в течение периода,
                необходимого для обработки обращения и решения связанных
                с ним вопросов, если более длительный срок не требуется
                законодательством или для защиты законных интересов.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white">
                6. Защита данных
              </h2>
  
              <p className="mt-4">
                Оператор принимает разумные организационные и технические
                меры для защиты персональных данных от неправомерного
                доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white">
                7. Права пользователя
              </h2>
  
              <p className="mt-4">
                Пользователь вправе обратиться по вопросам обработки своих
                персональных данных, запросить информацию об их обработке,
                потребовать уточнения или удаления данных в случаях,
                предусмотренных применимым законодательством.
              </p>
  
              <p className="mt-4">
                Для обращения используйте:
                <a
                  href="mailto:babelgleb182009@gmail.com"
                  className="ml-1 text-white underline underline-offset-4"
                >
                  babelgleb182009@gmail.com
                </a>
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white">
                8. Cookies и технические данные
              </h2>
  
              <p className="mt-4">
                Сайт не использует установленные оператором рекламные
                системы, Google Analytics или иные сторонние системы
                аналитики, указанные оператором.
              </p>
  
              <p className="mt-4">
                При использовании сайта технические данные и сетевые
                журналы могут обрабатываться инфраструктурными
                провайдерами, необходимыми для работы и доставки сайта.
                Политика Vercel предусматривает обработку технических
                данных, включая IP-адреса, журналы и данные о работе
                сервисов. :contentReference
              </p>
  
              <p className="mt-4">
                Отдельные технологии хранения или доступа к информации
                на устройстве пользователя могут подпадать под требования
                § 25 TDDDG, если сайт обслуживает пользователей,
                подпадающих под это законодательство. Для строго
                необходимых технологий отдельное согласие может не
                требоваться. :contentReference
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-white">
                9. Изменение политики
              </h2>
  
              <p className="mt-4">
                Оператор может обновлять настоящую политику при изменении
                сайта, способов обработки данных или применимого
                законодательства. Актуальная версия всегда размещается
                на этой странице.
              </p>
            </section>
  
            <section className="border-t border-zinc-900 pt-8">
              <p className="text-sm text-zinc-600">
                Вопросы по обработке персональных данных:
              </p>
  
              <a
                href="mailto:babelgleb182009@gmail.com"
                className="mt-2 inline-block text-white underline underline-offset-4"
              >
                babelgleb182009@gmail.com
              </a>
            </section>
          </div>
        </div>
      </main>
    );
  }
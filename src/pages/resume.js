import React from "react"
import * as styles from "./resume.module.css"

export default function Resume() {
  return (
    <main className={styles.container}>
      <h1>Helen | 강혜원</h1>
      <section>
        <h2>Introduce</h2>
        <p>
          <span className={styles.highlight}>
            React, Typescript, Next.js 기반의 2년 차 프론트엔드 개발자
          </span>
          로 서버사이드 개발 및 프론트엔드 개발에서 다양한 경험을 쌓아가고
          있습니다.
        </p>
        <p>
          프론트엔드 개발은 사용자에게 가장 가까운 레이어이기에,{" "}
          <span className={styles.highlight}>
            빠른 UI 렌더링과 효율적인 인터랙션 구현이 핵심
          </span>
          이라고 생각합니다. 이를 위해 렌더링 성능 최적화 방법을 지속적으로
          연구하고, 단순한 기능 구현도 가장 효율적인 접근법으로 설계하는 데
          주력하고 있습니다.
          <br />
          ‘잘 돌아가는 것’에 안주하지 않고 ‘더 빠르고, 더 낫게’라는 질문을
          스스로에게 던지며 치열하게 성장하고 싶고, 앞으로도 사용자 경험을
          극대화하는 최적의 해법을 탐구하는 개발자가 되고자 합니다.
        </p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <div className={styles.exp_container}>
          {constants.workExperience.map(companyInfo => (
            <div className={styles.exp_item}>
              <div className={styles.exp_left}>
                <img
                  className={styles.company_logo}
                  src={companyInfo.logo}
                  alt={companyInfo.company}
                />
                <h3>{companyInfo.company}</h3>
                <p>{companyInfo.position}</p>
                <p>{companyInfo.period}</p>
              </div>
              <div className={styles.exp_right}>
                <p>{companyInfo.description}</p>
                {companyInfo.projects &&
                  companyInfo.projects.map(item => (
                    <div className={styles.project}>
                      <h4>{item.name}</h4>
                      <span>{item.period}</span>
                      <h5>Description</h5>
                      <p>{parseHighlight(item.description)}</p>
                      <h5>What did I do</h5>
                      <ul>
                        {item.whatDidIDo.map(desc => (
                          <li>{parseHighlight(desc)}</li>
                        ))}
                      </ul>
                      {item.result && (
                        <>
                          <h5>Result</h5>
                          <ul>
                            {item.result.map(res => (
                              <li>{parseHighlight(res)}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      <div className={styles.tags}>
                        {item.tags.map(tag => (
                          <span className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Other Experiences</h2>
        {constants.others.map(item => (
          <div className={styles.row}>
            <div>{item.period}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </section>

      <section>
        <h2>Contact</h2>
        <div className={styles.contact_icons}>
          <a
            href="mailto:gpffps369@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contact_item}
            title="이메일 보내기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>gpffps369@gmail.com</span>
          </a>
          <a
            href="https://github.com/HyewonKKang"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contact_item}
            title="GitHub 프로필"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hyewon-kang-9ba666196/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contact_item}
            title="LinkedIn 프로필"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export function parseHighlight(text) {
  if (!text) return null

  const parts = text.split(/(\[\[.*?\]\]|\{\{.*?\}\})/g)

  return parts.map((part, index) => {
    if (!part) return null

    // [[highlight]]
    if (part.startsWith("[[") && part.endsWith("]]")) {
      const content = part.slice(2, -2)
      return (
        <span key={index} className={styles.highlight}>
          {content}
        </span>
      )
    }

    // {{링크}}
    if (part.startsWith("{{") && part.endsWith("}}")) {
      const href = part.slice(2, -2).trim()
      return (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          {href}
        </a>
      )
    }

    // 일반 문자열
    return <React.Fragment key={index}>{part}</React.Fragment>
  })
}

export const constants = {
  workExperience: [
    {
      logo: "/images/kakao.png",
      company: "카카오",
      position: "다음채널개발 / FE Developer",
      period: "2024.03 -",
      description:
        "다음채널개발 부서에서 뉴스뷰, 콘텐츠뷰, 포스트뷰, 라이브뷰 등 파트너 채널들의 콘텐츠를 제공하는 서비스 페이지의 프론트엔드 개발 업무를 담당하였습니다.",
      projects: [
        {
          name: "채널라이브 - 라이브뷰 서비스 개발",
          period: "2025.03 - 2025.05",
          description:
            "다음 언론사 채널에 라이브 기능을 신규 추가하면서 [[‘라이브 뷰’ 프론트엔드 개발]]을 진행했습니다. 라이브 뷰는 방송되는 [[실시간 스트리밍 페이지로 동영상 플레이어, 채팅 등의 기능을 포함]]합니다.",
          whatDidIDo: [
            "언론사 채널의 실시간 스트리밍 '라이브 뷰' 프론트엔드를 개발했습니다.",
            "브라우저 메모리 최적화를 위해 채팅 메시지 개수를 250개로 제한하고, MutationObserver API와 DOM Range API를 활용해 성능을 개선했습니다.",
            "iOS 모바일 환경에서 동영상 시킹(seeking) 후 재생이 중단되는 문제를 발견하고, 스톨 이벤트 감지 및 자동 복구 로직을 구현하여 크로스 플랫폼에서 일관된 미디어 재생 경험을 제공했습니다.",
            "PC, 모바일 웹앱(iOS, Android), 다음앱에서 [[브라우저 호환성을 안정적으로 제공]]하기 위한 테스트와 트러블 슈팅을 진행했습니다.",
          ],
          result: [
            "서비스 오픈 후 12일간 총 6천만 이상의 재생수와 550만 명의 재생자수를 기록하며 성공적으로 프로젝트를 완료했습니다.",
            "서비스 URL: {{https://live.v.daum.net/news/zKltxoJsRT}}",
          ],
          tags: ["React", "TypeScript", "Next.js", "pnpm"],
        },
        {
          name: "뷰 아키텍쳐 개선을 통한 서비스 다양성 지원",
          period: "2024.10 - 2025.01",
          description:
            "뷰 시스템 개편은 기존 [[Spring 기반의 운영툴 구조를 벗어나, 뷰 서비스에 최적화된 프론트엔드 환경을 구축]]하는 것을 목표로 삼았습니다. 이를 통해 페이지 로드 시간 단축과 개발 환경(DX) 개선을 동시에 이루고자 하였습니다.",
          whatDidIDo: [
            "페이지 로드 시간 단축 및 개발 경험 개선을 위해 빌드툴을 [[웹팩에서 Vite로 대체하는 환경 구축을]] 진행했습니다.",
            "번들 사이즈 최적화 및 [[최신 브라우저용 모듈과 레거시 브라우저용 모듈을 개별 생성 및 로드]]하는 구조를 제안하여 적용하였습니다.",
            "기존에는 리액트 컴포넌트를 작성하고 빌드한 뒤, 사내 분산 파일 시스템에 스크립트를 업로드하여 운영툴을 통해 업데이트하고 배포된 환경에서 컴포넌트를 검증했습니다. 이 과정을 간소화하기 위해 서버에서 내려주는 HTML 위에서 CSR로 렌더링하도록 vite 플러그인을 개발했습니다.",
          ],
          result: [
            "빌드 툴 개선 이후, 모바일 콘텐츠뷰 기준 [[빌드 타임을 기존 9초에서 2초대로 크게 감소]]시켰습니다.",
            "[[개발 환경과 배포된 서비스 환경의 일관성을 유지]]하여 DX 개선을 이룰 수 있었습니다.",
          ],
          tags: ["React", "TypeScript", "Vite", "pnpm"],
        },
        {
          name: "콘텐츠뷰 개편",
          period: "2024.05 - 2024.08",
          description:
            "콘텐츠뷰는 콘텐츠 제휴사를 위한 콘텐츠 비즈니스 채널 서비스로, 콘텐츠뷰 PC, MO 개편에 프론트엔드 개발로 참여하여 [[GNB, 채널 인기 콘텐츠, 카테고리 인기 콘텐츠, 숏폼 슬롯, 푸터 영역 등]]의 개발을 진행했습니다.",
          whatDidIDo: [
            "기존 스프링 기반 운영툴에서 관리하던 소스의 코드 유지보수성을 향상시키고 개발 효율성을 높이기 위한 목적으로 [[리액트 컴포넌트 기반으로 전환]]하는 과정에 참여해 진행했습니다.",
            "구글 유입이 높은 콘텐츠뷰 서비스의 SEO 점수와 웹 성능을 향상시켜 사용자 유입을 높이고자 하였습니다.",
          ],
          result: [
            "라이트하우스(Lighthouse) 수치 개선을 이룰 수 있었습니다. (성능: 68점 → 81점, 접근성: 68점 → 90점, SEO: 74점 → 91점)",
            "서비스 URL: {{https://v.daum.net/v/46kFjx0C4x}}",
          ],
          tags: ["React", "TypeScript"],
        },
      ],
    },
    {
      logo: "/images/kakao.png",
      company: "카카오",
      position: "다음채널개발파트 / 인턴",
      period: "2024.01 - 2024.02",
      description:
        "2024 카카오 채용 연계형 겨울 인턴십 과정에 참여하여 다음채널 기자별 페이지 프로젝트를 진행하였습니다.",
      projects: [
        {
          name: "(과제) 기자 페이지 프로젝트",
          period: "2024.01 - 2024.02",
          description:
            "2024 카카오 인턴십 기간 동안 진행했던 과제로, 주어진 요구사항과 API를 활용하여 기자별 페이지 개발을 진행하였습니다. 사내 인프라와 조직에서 사용하는 FE 기술을 활용하여 로그인, 기자 프로필, 기사 리스트, 통계, 방명록 등의 기능을 구현하였습니다.",
          whatDidIDo: [
            "콘텐츠 목록을 무한 스크롤로 구현하면서 대용량 리스트 처리에 대응하기 위해 [[react-window를 이용한 가상화 기법]]을 통해 개선하였습니다.",
            "좋아요 및 수정 기능에 대해서는 [[Optimistic UI]]를 사용하여 사용자에게 빠른 인터렉션을 보여주는 것을 목표로 하였습니다.",
            " SWR을 서버 데이터 fetching 및 caching 용도로 선택하면서 추가적인 개선이 필요한 부분에 대해 SWR middleware를 이용해 기존 훅을 커스텀하여 [[서버, 클라이언트 컴포넌트 간 중복된 API 요청이 이루어지지 않도록 개선]]하였습니다.",
          ],
          tags: ["Next.js", "TypeScript", "SWR", "Docker", "k8s"],
        },
      ],
    },
    {
      logo: "/images/toss.png",
      company: "비바리퍼블리카",
      position: "PC Design Platform Team / UX Engineer Assistant",
      period: "2023.01 - 2023.03",
      description:
        "토스 PC 제품에 들어가는 Toss Design System(TDS) 구현 및 유지보수 업무를 진행했습니다.",
      projects: [
        {
          name: "TDS-PC 구현 및 유지보수",
          period: "2023.01 - 2023.03",
          description:
            "토스 PC 제품에 사용되는 디자인 시스템도구를 유지보수하고, 사용성을 개선하는 프로젝트에 참여하였습니다.",
          whatDidIDo: [
            "[[Toss Design System(TDS)을 구현하고 유지보수]]를 담당했습니다.",
            "Framer 툴 내에서 디자이너를 위한 디자인 패널을 작업했습니다.",
            "Framer 컴포넌트를 리팩토링하고 새로운 컴포넌트를 개발하여 배포했습니다.",
            "[[FE 개발자를 위한 TDS 컴포넌트 인스펙터(코드 제너레이터) 작업]]을 수행했습니다.",
          ],
          result: [
            "Framer 툴에 디자인된 UI 요소를 크롬 익스텐션에서 디자인 시스템에 기반한 코드로 자동 생성해주는 코드 제너레이터를 개발하여 사내 FE 개발자들의 업무 효율을 높였습니다.",
            "복잡도가 높던 Table 컴포넌트의 사용성 개선을 위해 TableInput 컴포넌트를 개발하여 디자이너들의 작업 부담을 줄였습니다.",
          ],
          tags: [
            "React",
            "TypeScript",
            "Jest",
            "Storybook",
            "Emotion",
            "SCSS",
            "Framer-motion",
          ],
        },
      ],
    },
  ],
  others: [
    {
      period: "2024.03 - ",
      title: "[카카오] 다음채널개발 FE Developer",
    },
    {
      period: "2024.01 - 2024.02",
      title: "[카카오] 2024 카카오 겨울 인턴십(FE) 다음채널개발파트",
    },
    {
      period: "2023.01 - 2023.03",
      title: "[비바리퍼블리카] 토스 UX Engineer Assistant",
    },
    {
      period: "2022.08 - 2022.12",
      title: "네이버 커넥트재단 부스트캠프 웹・모바일 7기 멤버십",
    },
    {
      period: "2022.07 - 2022.08",
      title: "네이버 커넥트재단 부스트캠프 웹・모바일 7기 챌린지",
    },
    { period: "2021.09 - 2022.08", title: "42Seoul 5기" },
    { period: "2019.03 - 2024.02", title: "동국대학교 컴퓨터공학 학사" },
  ],
}

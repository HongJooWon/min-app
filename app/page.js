import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to MY page!&nbsp;
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        <Image
          src="/IMG_5946.JPG"
          alt="Your Image Alt Text"
          width={330}
          height={37}
          priority
        />
        <p className={`mt-2 text-sm opacity-50`}>
          제 사진을 대신해 귀여운 저의 고양이 레오 사진을 넣었습니다.
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.instagram.com/leo_oflee/?igshid=MzMyNGUyNmU2YQ%3D%3D"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            나이{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            레오는 이제 한살이구요, 제 나이는 99년생 25살 입니다. (클릭하시면 귀여운 레오를 더 보실 수 있어요!)
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            전공{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            1전공은 ACE이고 2전공은 공연영상을 전공하고 있습니다.
          </p>
        </a>

        <a
        href="https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-intp"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          MBTI{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          MBTI는 INTP입니다. (그런데 거의 모든 비율이 반반이에요.)
          </p>
        </a>

        <a
          href="https://drive.google.com/drive/folders/11XTmMxa4zJiBy8McZG4hc7kmVJ_i-tz9"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            취미{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            여행하는 걸 가장 좋아하지만 최근에는 영상을 찍고 편집하는 것도 재밌는 것 같아요. 애니메이션이나 드라마를 보는 것도 좋아합니다. (클릭하시면 여행 사진을 볼 수 있어요.)
          </p>
        </a>
      </div>
    </main>
  )
}

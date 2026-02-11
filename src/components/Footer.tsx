const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-32 overflow-hidden">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/footer-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      /> */}

      <div className="relative h-full flex items-center justify-between px-8">
        <div className="flex gap-4">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#2081E2]  flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>

          <a
            href="https://opensea.io"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#2081E2] flex items-center justify-center hover:scale-110 transition-transform"
          >
            <img src="/opensea.svg" alt="OpenSea" className="w-[30px] h-[30px]" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#2081E2]  flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>

        <div className="absolute right-[-1%] bottom-[-40%] h-[200px] w-[200px] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 254.73 221.92"
            preserveAspectRatio="xMaxYMax"
            data-open_viewmore="false"
            data-fade="index"
            class="h-full w-full"
          >
            <path
              fill="#203D99"
              className="absolute z-99"
              d="m225.68,15.74c-25.47-21.39-54.72-22.72-79.62,6.86-24.91,29.57-40.17,54.92-72.67,49.26-32.5-5.66-62.08,14.2-71.32,44.78-9.24,30.58,13.36,75.03,52.18,90.3,38.81,15.27,72.91,24.12,122.72.19,49.81-23.93,68.79-79.19,75.51-108.95,6.71-29.76-1.32-61.04-26.79-82.44Z"
            ></path>
            <text className=" text-white z-100 right-[30%] bottom-[-50%]" x="81.9%" y="95.9%">
              view collection
            </text>
          </svg>
          <span className="absolute right-[-10%] bottom-[-58%] h-[200px] w-[200px] cursor-pointer text-white text-xs font-semibold tracking-[0.3em]">
            View Collection
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

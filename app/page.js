import Image from 'next/image'
import Pdfuploader from '@/components/Pdfuploader/Pdfuploader'

export default function Home() {
  return (
    <main>

      <div className="bg-sky-700 flex flex-col items-stretch pb-12">
        <header className="bg-white flex w-full items-center justify-between gap-5 pl-20 pr-8 py-9 max-md:max-w-full max-md:flex-wrap">
          <button className="text-sky-700 text-2xl font-extrabold self-start bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/9a484a50e8cf07cf71a6a4a49d198f5b46cf2305d075baa2cd4fcb7924f09778?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&')]-2000w">
            GenOne
          </button>
          <button className="text-sky-700 text-lg font-semibold self-center my-auto">
            ChatGO
          </button>
          <button className="text-sky-700 text-lg font-semibold w-[268px] mt-2 self-start">
            Saving Challenges
          </button>
          <button className="text-sky-700 text-lg font-semibold mt-2">
            Community Hub
          </button>
          <form className="border shadow-sm bg-sky-700 self-stretch flex w-[251px] shrink-0 max-w-full h-[39px] flex-col rounded-[30px]"> <button className="text-white text-lg text-center font-semibold mt-2">Translate</button></form>
        </header>

        <div className="w-full mt-36 mb-4 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a484a50e8cf07cf71a6a4a49d198f5b46cf2305d075baa2cd4fcb7924f09778?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[1.03] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-2 px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-7xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
                  Çiao!
                </div>
                <div className="text-white text-7xl font-bold self-stretch mt-9 max-md:max-w-full max-md:text-4xl">
                  Empower Your Financial Journey, Regardless of Language Barriers
                </div>
                <div className="text-white text-3xl font-semibold self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                  Translate Your Financial Documents with Precision and Ease
                </div>
                <Pdfuploader />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-stretch px-5">
        <header className="bg-gray-200 flex w-full flex-col justify-center items-center px-16 py-11 max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-[981px] mb-3 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                <aside className="flex grow flex-col items-stretch mt-3.5 max-md:mt-10">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/092ca4d9451a966afd8f4b83cfffd9ca9143ccc2de5885054d84e173bb62c193?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-square object-contain object-center w-[77px] overflow-hidden self-center max-w-full" />
                  <div className="text-neutral-600 text-center text-2xl font-semibold leading-7 mt-7">Upload Financial a Document</div>
                  <a className="pt-6 px-1 text-white text-center text-5xl font-semibold leading-7 bg-neutral-600 self-center justify-center items-center h-[75px] mt-6 pl-7 pr-9 rounded-[150px] max-md:text-4xl max-md:px-5" href="#" aria-label="Step 1">1</a>
                </aside>
              </div>
              <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
                <aside className="flex grow flex-col items-stretch max-md:mt-10">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09ca64b0abc9da7ec96404f6e627452e5fbcf7953aff33a9e60dcde5acc95e87?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[0.99] object-contain object-center w-[103px] overflow-hidden self-center max-w-full" />
                  <div className="text-neutral-600 text-center text-2xl font-semibold leading-7 mt-4">Translate and get Summary</div>
                  <a className="pt-6 px-1 text-white text-center text-5xl font-extrabold leading-7 bg-neutral-600 self-center w-[75px] justify-center items-center h-[75px] mt-5 px-7 rounded-[150px] max-md:text-4xl max-md:leading-7 max-md:px-5" href="#" aria-label="Step 2">2</a>
                </aside>
              </div>
              <div className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
                <aside className="flex grow flex-col items-stretch mt-3.5 max-md:mt-10">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b665081c3a5d93d29d4472bff94f4639b4c996a7de5cfddc6540f92d3080c2e0?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-square object-contain object-center w-[90px] overflow-hidden self-center max-w-full" />
                  <div className="text-neutral-600 text-center text-2xl font-semibold leading-7 mt-4">Ask questions and get Advice</div>
                  <div className="pt-6 text-white text-center text-5xl font-extrabold leading-7 whitespace-nowrap bg-neutral-600 self-center justify-center items-center h-[75px] mt-5 px-6 rounded-[150px] max-md:text-4xl max-md:px-5" href="#" aria-label="Step 3">3</div>
                </aside>
              </div>
            </div>
          </div>
        </header>
        <main className="bg-white flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-[1100px] mt-28 mb-16 max-md:max-w-full max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
                <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/19b45c76d3ce769751a15d05640eac6f19995c723a57b2bebaae4513c0adf032?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[1.34] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-9" />
              </div>
              <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
                <aside className="flex flex-col items-center mt-3.5 max-md:max-w-full max-md:mt-10">
                  <div className="text-sky-600 text-5xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">Translate, Chat, and Learn with Our AI Assistant</div>
                  <div className="text-black text-3xl font-medium tracking-widest self-stretch mt-9 max-md:max-w-full">Your Go-To Hub for Translating, Inquiring, and Gaining Valuable Financial Insights</div>
                  <button className="text-white text-3xl font-semibold whitespace-nowrap bg-sky-600 justify-center items-stretch mt-5 px-16 py-5 rounded-[30px] max-md:px-5 max-md:pr-6" aria-label="Try now">Try It Now!</button>
                </aside>
              </div>
            </div>
          </div>
        </main>
      </section>


      <form className="flex flex-col items-stretch bg-sky-700">

        <div className="w-full px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet=" https://cdn.builder.io/api/v1/image/assets/TEMP/2f8db5a9a222ac3a99e44a4a92138f83e034b9930369ca6cb7d94136ce54886a?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[0.54] object-contain object-center w-full overflow-hidden grow"
                aria-label="Savings Image"
              />
            </div>
            <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
              <a href="#" className="flex flex-col items-center mt-36 max-md:max-w-full max-md:mt-10" aria-label="Join Savings">
                <div className="text-white text-center text-7xl font-semibold tracking-[2.4px] self-stretch max-md:max-w-full max-md:text-4xl">
                  Join Community Saving Challenges
                </div>
                <div className="text-white text-center text-3xl font-medium tracking-widest self-stretch mt-10 max-md:max-w-full max-md:mt-10">
                  Connect with Like-Minded Savers, Set Goals, and Achieve Financial Milestones Together
                </div>
                <a
                  href="#"
                  className="text-sky-700 text-3xl font-semibold whitespace-nowrap bg-white w-[285px] max-w-full justify-center items-center mt-9 px-16 py-5 rounded-[30px] max-md:px-5"
                  aria-label="Try It Now"
                >
                  Try It Now!
                </a>
              </a>
            </div>
            <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet=" https://cdn.builder.io/api/v1/image/assets/TEMP/d11165110baf5029ff6ba1f94e487696c04a5a77f414e4df168f96ea2e43666d?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[0.56] object-contain object-center w-full overflow-hidden grow"
                aria-label="Savings Image"
              />
            </div>
          </div>
        </div>
      </form>

      <form className="bg-neutral-100 flex flex-col items-stretch px-16 py-11 max-md:px-5">
        <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet=" https://cdn.builder.io/api/v1/image/assets/TEMP/208b3d3472661b7cdae4d96476f69d9233e00813d671758a2e803c0102afc4aa?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[1.79] object-contain object-center w-[186px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Image 1"
          />
          <img
            loading="lazy"
            srcSet=" https://cdn.builder.io/api/v1/image/assets/TEMP/058085b9fd0b91b96b8986796999248c417a2872582213f1b35c9266788d9df8?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[1.49] object-contain object-center w-[134px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Image 2"
          />
          <img
            loading="lazy"
            srcSet=" https://cdn.builder.io/api/v1/image/assets/TEMP/65b762b4d75643b0d969a7c0f91cc0039620f8134eab3d1e1035ed014eb87729?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[1.23] object-contain object-center w-[136px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Image 3"
          />
          <img
            loading="lazy"
            srcSet=" https://cdn.builder.io/api/v1/image/assets/TEMP/dda728059b71f15c78570764b10609a698b5e700d0a851eabd1d44e023a38e73?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[3.77] object-contain object-center w-[196px] overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Image 4"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc221dd833c7afe4135cf94fa5ca8966c08ddae4baef8497b52b1da58063fe19?apiKey=66d0a91ffd924cc982cc6ef1cfdecdf4&" className="aspect-[1.5] object-contain object-center w-[292px] overflow-hidden self-stretch shrink-0 max-w-full"
            alt="Image 5"
          />
        </div>
        <header
          className="text-sky-600 text-5xl font-bold self-center mt-3.5 max-md:max-w-full max-md:text-4xl"
          aria-label="Heading"
        >
          Send Money to Family with These Apps!
        </header>
        <div
          className="text-black text-center text-3xl font-medium tracking-widest self-center max-w-[829px] mt-7 mb-6 max-md:max-w-full"
          aria-label="Description"
        >
          Explore seamless and secure ways to send money to your loved ones using our integrations with these apps!
        </div>
      </form>


    </main>

  )
}

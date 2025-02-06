import Image from "next/image";

export default function Home() {
  const faqList = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];


  return (
    <main className="absolute h-screen w-screen flex flex-col justify-center items-center">
      <div className="grid w-max m-5 p-12 space-y-6 rounded-2xl bg-white">
        <div className="flex flex-row space-x-5">
          <Image
            src="/assets/images/icon-star.svg"
            alt="decorative-star"
            height={30}
            width={30}
          ></Image>
          <h1 className="text-5xl font-bold text-custDarkPurple">FAQs</h1>
        </div>

        <ul className="flex flex-col">
          {
            faqList.map((faq, index) => (
              <li key={index} className="py-6 border-t first:border-t-0 border-custLightPink">
                <button className="w-full flex justify-between items-center text-left">
                  <a className="font-bold text-custDarkPurple hover:text-custBrightPurple">
                    {faq.question}
                  </a>
                  <Image
                    src="/assets/images/icon-plus.svg"
                    alt=""
                    height={30}
                    width={30}
                    className="ml-10"
                  ></Image>
                </button>

              </li>
            )
            )
          }
        </ul>
      </div>

      <div>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.&nbsp;
        <br className="sm:hidden"></br>
        Coded by <a href="https://www.frontendmentor.io/profile/joanneast" target="_blank">Joan</a>.
      </div>
    </main>
  );
}

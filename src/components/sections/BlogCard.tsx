import Link from "@/components/ViewTransitionLink";

export default function BlogCard() {
  const blogs = [
    {
      title: "What is Odoo sh?",
      description:
        "ဒီကနေ့မှာတော့ All-in-one management software တခုဖြစ်ပြီး Open source software တခုလည်း ဖြစ်တဲ့ Odoo ERP software အား ကမ္ဘာနှင့် တဝှမ်း အသုံးပြုသူများ ပိုမို များပြားလာပြီ ဖြစ်ပါတယ်။ ",
      author: "Admin",
      date: "Sep 10, 2025",
      category: "Knowledge Sharing",
      imgSrc:
        "https://www.beedatamyanmar.com/wp-content/uploads/2025/01/odoo-sh--940x740.jpeg",
      authorImg:
        "https://clarity-tailwind.preview.uideck.com/images/blog-01.png",
    },
    {
      title: "Odoo Functional Training Course",
      description:
        "Odoo Functional Training Course ကိုတက်ရောက်ခြင်းဖြင့် သင်၏ Business အသိအမြင်များကို နည်းပညာဘက်တွင် မြှင့်တင်ပြီး သင်၏အနာဂတ်ကို မြှင့်တင်လိုက်ပါ…",
      author: "Admin",
      date: "Sep 8, 2025",
      category: "Training",
      imgSrc:
        "https://www.beedatamyanmar.com/wp-content/uploads/2025/01/306479426_105935282266817_1656337879101835776_n-940x740.png",
      authorImg:
        "https://clarity-tailwind.preview.uideck.com/images/blog-01.png",
    },
    {
      title: "Software Developer တယောက် ဖြစ်ဖို့ ရည်မှန်းထားပါသလား",
      description:
        "Programming language များကို စတင် မလေ့လာခင် “Fundamental with Algorithm” အကြောင်းအရာကို စတင်လေ့လာကြရအောင်... ",
      author: "Admin",
      date: "Sep 5, 2025",
      category: "Training",
      imgSrc:
        "https://www.beedatamyanmar.com/wp-content/uploads/2019/10/softwareDev-1-1080x740-1.jpg",
      authorImg:
        "https://clarity-tailwind.preview.uideck.com/images/blog-01.png",
    },
  ];

  return (
    <div id="latest" className="pt-28">
      {/* Header Section */}
      <div className="mb-12 space-y-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
          Latest Blogs
        </h2>
        {/* <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          Stay updated with the latest trends, insights, and best practices in
          technology and development.
        </p> */}
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="group  sm:p-5 rounded-3xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="mb-6 overflow-hidden rounded-lg">
              <a href="#">
                <img
                  src={item.imgSrc}
                  alt="Blog Image"
                  className="w-full h-48 object-cover transition-transform transform group-hover:scale-105"
                />
              </a>
            </div>

            {/* Title and Description */}
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              <a
                href="blog-single.html"
                className="block hover:text-secondary "
              >
                {item.title}
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>

            {/* Author and Metadata */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <img
                  src={item.authorImg}
                  alt="Author"
                  className="w-8 h-8 rounded-full"
                />
                <p>{item.author}</p>
                <span className="block w-1 h-1 bg-gray-400 rounded-full"></span>
                <p>{item.date}</p>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

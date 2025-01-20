import Link from "@/components/ViewTransitionLink";

export default function Blog() {
  const blogs = [
    {
      title: "Understanding the Future of AI",
      description:
        "Discover how artificial intelligence is shaping the future of technology and what it means for you.",
      author: "Adrio Devid",
      date: "Sep 10, 2025",
      category: "Technology",
      imgSrc: "https://clarity-tailwind.preview.uideck.com/images/blog-02.png",
      authorImg:
        "https://clarity-tailwind.preview.uideck.com/images/blog-01.png",
    },
    {
      title: "Building Scalable Web Applications",
      description:
        "Learn the key principles for designing and developing scalable web apps with modern frameworks.",
      author: "Jane Doe",
      date: "Sep 8, 2025",
      category: "Development",
      imgSrc: "https://clarity-tailwind.preview.uideck.com/images/blog-03.png",
      authorImg:
        "https://clarity-tailwind.preview.uideck.com/images/blog-01.png",
    },
    {
      title: "Exploring Cloud-Native Architecture",
      description:
        "A comprehensive guide to understanding cloud-native architecture and its benefits for your business.",
      author: "John Smith",
      date: "Sep 5, 2025",
      category: "Cloud",
      imgSrc: "https://clarity-tailwind.preview.uideck.com/images/blog-01.png",
      authorImg:
        "https://clarity-tailwind.preview.uideck.com/images/blog-01.png",
    },
  ];

  return (
    <div id="latest" className="pt-28">
      {/* Header Section */}
      <div className="mb-12 space-y-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
          Latest Articles
        </h2>
        <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          Stay updated with the latest trends, insights, and best practices in
          technology and development.
        </p>
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

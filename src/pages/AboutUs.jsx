// src/pages/AboutUs.jsx
export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Not everyone can afford a paid subscription to streaming platforms like
        Netflix or Prime Video, etc, and not every great Nigerian filmmaker or
        storyteller can afford to distribute their work through these platforms
        either.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        This project is a personalized movie discovery application that helps
        users explore curated YouTube movies and series from Nigeria, as well as
        global picks, including faith-based content and C-dramas. The idea was
        born from my recent habit of watching lots of movies and wanting to
        highlight great, accessible content that often goes unnoticed especially
        free titles on YouTube.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        It solves that by spotlighting high-quality, free Nigerian YouTube
        content while also offering optional recommendations for those with
        access to paid platforms.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        This platform is designed to spotlight high-quality Nigerian movies and
        series available on YouTube, making it easier for audiences to discover
        relaxing, fun, faith-based, and wholesome content all without a price
        tag.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Character Reviews</strong> focusing not on the film as a
          whole but on standout characters and their impact.  We don't just want to review movies but the characters that stood out to us.
        </li>
        <li>
          <strong>C-Drama Favorites</strong> You will also get a curated list of top Chinese dramas for fans of emotional and layered storytelling
        </li>
        <li>
          <strong>Faith-Based Films</strong> We believe in hope, healing, and upliftment through Faith. This is why we intend to add a section  featuring global Christian movies and series (both free and paid)
        </li>
        <li>
          <strong>Global Picks</strong> For those who can access premium,
          faith-inspired or uplifting content on platforms like Netflix or Prime Video, etc, we will include our recommendations
        </li>
      </ul>

      <p className="text-lg text-gray-700 mt-6">
        This platform is for people who enjoy watching good stories, discovering
        new creators, and revisiting characters that leave a mark, whether the
        content is made in Nigeria, China, or beyond.
      </p>
    </div>
  );
}
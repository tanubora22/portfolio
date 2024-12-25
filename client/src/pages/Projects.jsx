import React from "react";
import ProjectCard from "../components/ProjectCards";
import project from "/projects/plot.png";
import lift from "/projects/hmss.png";
import kickstart from "/projects/shopping.jpg";

const Projects = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-gray-500 to-gray-800" id="projects">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">
          My <strong className="text-yellow-400">Recent Work</strong>
        </h1>
        <p className="text-center text-white mb-12 text-lg">
          Here are a few of my recent projects showcasing my skills in web development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="transform transition duration-300 hover:scale-105 hover:bg-gray-800 rounded-lg shadow-xl">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="AROGYA"
              description="AROGYA is built using Next.js and Tailwind CSS for a responsive, modern user interface. I have developed dedicated modules for different roles, such as Reception, HR Management, Master Data, Account, and Pharmacy, making the system highly versatile and role-based. It includes a dynamic dashboard designed for Super Admin and Admin roles, allowing for efficient management of hospital operations. The system supports full CRUD functionality for various modules and provides a seamless experience for both users and admins. Additionally, I have integrated REST APIs for efficient data fetching and real-time updates."
              ghLink="https://github.com/your-github-username/your-repository-link"
            />
          </div>



          {/* Project 2 */}
          <div className="transform transition duration-300 hover:scale-105 hover:bg-gray-800 rounded-lg shadow-xl">
  <ProjectCard
    imgPath={project}
    isBlog={false}
    title="Real Estate"
    description="This Real Estate project is built using React and styled with Tailwind CSS for a fully responsive and modern UI. The application allows users to view available plots, check their prices, and view the location on the map. The design is sleek, mobile-friendly, and optimized for an enhanced user experience. It showcases my ability to create dynamic and responsive web applications that provide valuable functionality to the users."
    ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
    demoLink="https://project-krypto.netlify.app/"
  />
</div>


          {/* Project 3 */}
          <div className="transform transition duration-300 hover:scale-105 hover:bg-gray-800 rounded-lg shadow-xl">
  <ProjectCard
    imgPath={kickstart}
    isBlog={false}
    title="E‑Commerce Website"
    description="This E-commerce website is built using React and styled with Tailwind CSS, providing a responsive and modern user interface. It allows users to shop products, add them to the cart, and manage a favorite list. The application supports product filtering based on various categories and attributes for a better shopping experience. The website includes a complete purchase process, and payments are handled securely through the integrated Stripe API. It also includes an admin panel with full CRUD functionality for users and products, and displays statistics through charts. "
    ghLink="https://github.com/19sajib/mern-stack-ecommerce"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default Projects;

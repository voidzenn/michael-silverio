import { Github } from 'lucide-react';
import Badge from '../../components/Badge/Badge';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Projects = () => {
  const openRepoLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mx-60 my-16">
      <h4 className="text-2xl font-bold mb-10">Projects</h4>
      <h5 className="text-xl font-normal mt-4 ml-2">Web</h5>
      <div className="mt-8 grid gap-x-16 gap-y-16 grid-cols-2">
        <Card
          imageUrl="https://github.com/user-attachments/assets/526ace27-cc08-4037-b754-dc5dfb15a803"
          cardBody={
            <>
              <Button
                title="Go to repository"
                onClick={() =>
                  openRepoLink(
                    'https://github.com/voidzenn/file_manager_fe#preview'
                  )
                }
                type="link"
              >
                File Manager
              </Button>
              <p className="mx-3 mt-2 opacity-30 text-justify leading-6">
                Allows users to manage their files and folders seamlessly. The
                app uses Minio for object storage, ensuring that the structure
                in the File Manager UI mirrors the structure in Minio, providing
                a reliable and intuitive user experience. Additionally, the app
                features real-time updates with ActionCable, allowing users to
                see changes immediately as they happen.
              </p>
            </>
          }
          cardFooter={
            <div className="flex gap-2 ml-2">
              <Badge>React</Badge>
              <Badge>Rails</Badge>
              <Badge>ActionCable</Badge>
              <Badge>Zustand</Badge>
              <Badge>Tailwindcss</Badge>
            </div>
          }
        />
        <Card
          imageUrl="https://github.com/user-attachments/assets/58e74231-82ca-4129-b5c5-1c1b865503d8"
          cardBody={
            <>
              <Button
                title="Go to repository"
                onClick={() =>
                  openRepoLink(
                    'https://github.com/voidzenn/blog_management#preview'
                  )
                }
                type="link"
              >
                Blog Management
              </Button>
              <p className="mx-3 mt-2 opacity-30 text-justify leading-6">
                Built a blog management platform using ActiveAdmin and Hotwire,
                allowing admins to seamlessly create, edit, and manage blog
                posts. Developed user-facing features for browsing, searching,
                and filtering posts with individual post detail views.
                Integrated cover image uploads and embedded image functionality
                within post content, enhancing the overall visual and content
                experience. happen.
              </p>
            </>
          }
          cardFooter={
            <div className="flex gap-2 ml-2">
              <Badge>Rails</Badge>
              <Badge>Hotwire</Badge>
              <Badge>Tailwindcss</Badge>
              <Badge>Javascript</Badge>
            </div>
          }
        />
        <Card
          imageUrl="https://user-images.githubusercontent.com/47482620/209609626-b41d3479-715b-4655-88a8-f4987c5efb40.png"
          cardBody={
            <>
              <Button
                title="Go to repository"
                onClick={() =>
                  openRepoLink(
                    'https://github.com/voidzenn/e-learning#app-images'
                  )
                }
                type="link"
              >
                E - learning
              </Button>
              <p className="mx-3 mt-2 opacity-30 text-justify leading-6">
                Developed an e-learning platform where admins create word-based
                quizzes within categories. Users select categories, answer
                word-choice quizzes, and view results upon completion. Built
                features for login/signup, user profiles with photo updates,
                following other users to track activity, and viewing completed
                categories. Designed with Material UI and Tailwind CSS for a
                clean, modern interface.
              </p>
            </>
          }
          cardFooter={
            <div className="flex gap-2 ml-2">
              <Badge>React</Badge>
              <Badge>Laravel</Badge>
              <Badge>Redux</Badge>
              <Badge>Tailwindcss</Badge>
              <Badge>MUI</Badge>
            </div>
          }
        />
      </div>
      <div className="mt-10 flex w-full gap-16"></div>
      <h5 className="mt-20 ml-2 text-lg font-normal">Non - Web</h5>
      <div className="mt-8 grid grid-cols-2 gap-x-16 gap-y-16">
        <Card
          imageUrl="https://github.com/user-attachments/assets/4b435bde-f9be-4299-8476-a3ee966c3740"
          cardBody={
            <Button
              title="Go to repository"
              onClick={() =>
                openRepoLink(
                  'https://github.com/voidzenn/fruit_matcher?tab=readme-ov-file#preview'
                )
              }
              type="link"
            >
              Fruit Matcher
            </Button>
          }
          cardFooter={
            <div className="flex gap-2 ml-2">
              <Badge>Ruby</Badge>
              <Badge>Ruby2d</Badge>
            </div>
          }
        />
        <Card
          imageUrl="https://github.com/voidzenn/pygame_tic-tac-toe/assets/47482620/99d5c881-bfae-403f-b000-d8b1197aacc1"
          cardBody={
            <Button
              title="Go to repository"
              onClick={() =>
                openRepoLink(
                  'https://github.com/voidzenn/pygame_tic-tac-toe#images'
                )
              }
              type="link"
            >
              Tic Tac Toe
            </Button>
          }
          cardFooter={
            <div className="flex gap-2 ml-2">
              <Badge>Python</Badge>
              <Badge>Pygame</Badge>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Projects;

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
      <div className="mt-8 flex w-full gap-10">
        <div className="w-1/2">
          <Card
            imageUrl="https://private-user-images.githubusercontent.com/47482620/355063923-526ace27-cc08-4037-b754-dc5dfb15a803.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2ODkxNjUsIm5iZiI6MTcyNzY4ODg2NSwicGF0aCI6Ii80NzQ4MjYyMC8zNTUwNjM5MjMtNTI2YWNlMjctY2MwOC00MDM3LWI3NTQtZGM1ZGZiMTVhODAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTMwVDA5MzQyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThkNjY2NWZlMzc2NzRhMTc5OTJmZDVjYzU3YWY3M2JhYWUzYjNmOWY5N2Y4NDhlNWQ0MDljMDk4ZTFhNmFmNjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UdYdBLU6Fq8nmqBboLcE6YapnapvUp9fFKx-9Qi6VmY"
            cardBody={
              <>
                <Button
                  title="Go to repository"
                  onClick={() =>
                    openRepoLink(
                      'https://github.com/voidzenn/file_manager_fe#preview'
                    )
                  }
                >
                  File Manager
                </Button>
                <p className="mx-3 opacity-35 text-justify">
                  Allows users to manage their files and folders seamlessly. The
                  app uses Minio for object storage, ensuring that the structure
                  in the File Manager UI mirrors the structure in Minio,
                  providing a reliable and intuitive user experience.
                  Additionally, the app features real-time updates with
                  ActionCable, allowing users to see changes immediately as they
                  happen.
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
        </div>
        <div className="w-1/2">
          <Card
            imageUrl="https://private-user-images.githubusercontent.com/47482620/371850991-58e74231-82ca-4129-b5c5-1c1b865503d8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2ODkyMTYsIm5iZiI6MTcyNzY4ODkxNiwicGF0aCI6Ii80NzQ4MjYyMC8zNzE4NTA5OTEtNThlNzQyMzEtODJjYS00MTI5LWI1YzUtMWMxYjg2NTUwM2Q4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTMwVDA5MzUxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk2NTFlNWMxYTM4NTRjZmUxMDk2OGZhZGUyMWNhMjQ4ODhlODc2YjU2YWMzMWFlZDlkYTdkOTI5MzQzMTI1YjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.S_hcSsKsChF-8JXeu9eq5uz5r93bp2dAvV1yNUJ5w2M"
            cardBody={
              <>
                <Button
                  title="Go to repository"
                  onClick={() =>
                    openRepoLink(
                      'https://github.com/voidzenn/blog_management#preview'
                    )
                  }
                >
                  Blog Management
                </Button>
                <p className="mx-3 opacity-35 text-justify">
                  Built a blog management platform using ActiveAdmin and
                  Hotwire, allowing admins to seamlessly create, edit, and
                  manage blog posts. Developed user-facing features for
                  browsing, searching, and filtering posts with individual post
                  detail views. Integrated cover image uploads and embedded
                  image functionality within post content, enhancing the overall
                  visual and content experience. happen.
                </p>
              </>
            }
            cardFooter={
              <div className="flex gap-2">
                <Badge>Rails</Badge>
                <Badge>Hotwire</Badge>
                <Badge>Tailwindcss</Badge>
                <Badge>Javascript</Badge>
              </div>
            }
          />
        </div>
      </div>
      <div className="mt-10 flex w-full gap-10">
        <div className="w-1/2">
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
                >
                  E-learning
                </Button>
                <p className="mx-3 opacity-35 text-justify">
                  Developed an e-learning platform where admins create
                  word-based quizzes within categories. Users select categories,
                  answer word-choice quizzes, and view results upon completion.
                  Built features for login/signup, user profiles with photo
                  updates, following other users to track activity, and viewing
                  completed categories. Designed with Material UI and Tailwind
                  CSS for a clean, modern interface.
                </p>
              </>
            }
            cardFooter={
              <div className="flex gap-2">
                <Badge>React</Badge>
                <Badge>Laravel</Badge>
                <Badge>Redux</Badge>
                <Badge>Tailwindcss</Badge>
                <Badge>MUI</Badge>
              </div>
            }
          />
        </div>
      </div>
      <h5 className="mt-20 ml-2 text-lg font-normal">Non - Web</h5>
      <div className="mt-8 flex w-full gap-10">
        <div className="w-1/2">
          <Card
            imageUrl="https://private-user-images.githubusercontent.com/47482620/361764930-4b435bde-f9be-4299-8476-a3ee966c3740.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2ODkyOTYsIm5iZiI6MTcyNzY4ODk5NiwicGF0aCI6Ii80NzQ4MjYyMC8zNjE3NjQ5MzAtNGI0MzViZGUtZjliZS00Mjk5LTg0NzYtYTNlZTk2NmMzNzQwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTMwVDA5MzYzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE1YzcxYTI5ODlmNDY1ZWVhOTE3N2NiN2Y1YjljYjE5ZWExNWY1ZDhlMGM2MGFkMzhmMzQzZjQ1Y2FkY2FlZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.90q0dare40CwF_awkyAhmmgINhq6bcOKEQ4VIfgGf4c"
            cardBody={
              <Button
                title="Go to repository"
                onClick={() =>
                  openRepoLink(
                    'https://github.com/voidzenn/fruit_matcher?tab=readme-ov-file#preview'
                  )
                }
              >
                Fruit Matcher
              </Button>
            }
            cardFooter={
              <div className="flex gap-2">
                <Badge>Ruby</Badge>
                <Badge>Ruby2d</Badge>
              </div>
            }
          />
        </div>
        <div className="w-1/2">
          <Card
            imageUrl="https://private-user-images.githubusercontent.com/47482620/248714501-99d5c881-bfae-403f-b000-d8b1197aacc1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2ODkzMzMsIm5iZiI6MTcyNzY4OTAzMywicGF0aCI6Ii80NzQ4MjYyMC8yNDg3MTQ1MDEtOTlkNWM4ODEtYmZhZS00MDNmLWIwMDAtZDhiMTE5N2FhY2MxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTMwVDA5MzcxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJkNzdkNTUxY2RhNjMxMWVhMjMxYWJjYzg1YzFkMTAwYjgyNDZkNWIwYTU2MjNkMDI1YTZjZWY3ZGM3NmViYjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.1IPBk3by6qKlhfVyz4iAdjZXwOHjR84PeBqfsehefbw"
            cardBody={
              <Button
                title="Go to repository"
                onClick={() =>
                  openRepoLink(
                    'https://github.com/voidzenn/pygame_tic-tac-toe#images'
                  )
                }
              >
                Tic Tac Toe
              </Button>
            }
            cardFooter={
              <div className="flex gap-2">
                <Badge>Python</Badge>
                <Badge>Pygame</Badge>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

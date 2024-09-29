import Badge from "../../components/Badge/Badge";

const Projects = () => {
  return (
    <div className="mx-60 my-32">
      <h4 className="font-medium">Projects</h4>
      <div className="mt-10 flex w-full gap-10">
        <div className="w-1/3">
          <div>
            <img
              src="https://private-user-images.githubusercontent.com/47482620/355063923-526ace27-cc08-4037-b754-dc5dfb15a803.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2MDk3NzcsIm5iZiI6MTcyNzYwOTQ3NywicGF0aCI6Ii80NzQ4MjYyMC8zNTUwNjM5MjMtNTI2YWNlMjctY2MwOC00MDM3LWI3NTQtZGM1ZGZiMTVhODAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTI5VDExMzExN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUxMjMzZmRkNzBlYmJmODQwZjdhODExYzFhNTg2ZDcxMmJjMGQ2ZTM0MjI2ODg2ZjAyYTdlZjFkMDEwZmUxMTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v_DhzmCE7dzrx27T3fasMOIVh9c29Q-9AT5kWJl8sIA"
              alt="img"
            />
            <h4>File Manager</h4>
            <div className="flex gap-2">
              <Badge>React</Badge>
              <Badge>Rails</Badge>
              <Badge>Tailwindcss</Badge>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div>
            <img
              src="https://private-user-images.githubusercontent.com/47482620/371850991-58e74231-82ca-4129-b5c5-1c1b865503d8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2MTA0MTIsIm5iZiI6MTcyNzYxMDExMiwicGF0aCI6Ii80NzQ4MjYyMC8zNzE4NTA5OTEtNThlNzQyMzEtODJjYS00MTI5LWI1YzUtMWMxYjg2NTUwM2Q4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTI5VDExNDE1MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdjMjdiYmE1MWFhZjJlNTJiMDZiMGQ3NjU4MTIyODU3MGE3ODBmZmIzMTI3MWQ4NmE3OWJlOTdmYTYxMTZhYzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.rwcLlbvfIeRciIyocnDBSfH8vfkT9E6L9AoEGZTj0bI"
              alt="img"
            />
            <h4>Blog Management</h4>
            <div className="flex gap-2">
              <Badge>Rails</Badge>
              <Badge>Hotwire</Badge>
              <Badge>Tailwindcss</Badge>
              <Badge>Javascript</Badge>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div>
            <img
              src="https://user-images.githubusercontent.com/47482620/209609626-b41d3479-715b-4655-88a8-f4987c5efb40.png"
              alt="img"
            />
            <h4>E-learning</h4>
            <div className="flex gap-2">
              <Badge>React</Badge>
              <Badge>Laravel</Badge>
              <Badge>Tailwindcss</Badge>
              <Badge>MUI</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

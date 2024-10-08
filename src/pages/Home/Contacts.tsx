import Button from "../../components/Button/Button";

const Contacts = () => {
  const handleGithubClick = () => {
    window.open(
      'https://github.com/voidzenn',
      '_blank',
      'noopener, noreferrer'
    );
  };

  const handleLinkedInClick = () => {
    window.open(
      'https://www.linkedin.com/in/michael-silverio-a342a6141/',
      '_blank',
      'noopener, noreferrer'
    );
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:mikesil121@gmail.com';
  }

  return (
    <div className="flex gap-4 mx-60 my-20">
      <Button onClick={handleGithubClick}>Github</Button>
      <Button onClick={handleLinkedInClick}>LinkedIn</Button>
      <Button onClick={handleEmailClick}>Email</Button>
    </div>
  );
}

export default Contacts;

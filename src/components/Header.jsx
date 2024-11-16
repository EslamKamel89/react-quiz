import ReactLogo from '../assets/quiz-logo.png';
export default function Header() {
    return <header>
        <img src={ReactLogo} alt="React Logo" />
        <h1>ReactQuiz</h1>
    </header>;
}
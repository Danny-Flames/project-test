import { TypewriterTextProps } from "../types/home/types";

const TypewriterText = ({
  text,
  speed = 30,
  delay = 0,
}: TypewriterTextProps) => {
  return (
    <div className="typewriter-container relative">
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="typewriter-char opacity-0 inline-block"
              style={{
                animation: `typing-reveal 0s ${
                  delay + (wordIndex * 100 + charIndex * speed)
                }ms forwards`,
              }}
            >
              {char}
            </span>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </div>
  );
};

export default TypewriterText;

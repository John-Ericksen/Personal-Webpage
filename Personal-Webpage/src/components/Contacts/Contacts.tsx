import "./Contacts.scss";

export default function Contacts(props: any) {
  return (
    <div
      className={`contacts ${props.sectionArray[4] ? "active" : "inactive"}`}
    >
      <div className="content">
        <h2>(631) 637-5654</h2>
        <h2>john.paul.ericksen@gmail.com</h2>
        <h2>20 Spaulding Lane, Stony Brook, NY, 11790</h2>
        <h2>
          <a href="https://www.linkedin.com/in/john-ericksen-38b853255/">
            LinkedIn
          </a>
        </h2>
        <h2>
          <a href="https://github.com/John-Ericksen">Github</a>
        </h2>
      </div>

      <svg
        className="divider"
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="322"
        viewBox="0 0 2 322"
        fill="none"
      >
        <path d="M1 0L1.00001 322" stroke-width="1.6" />
      </svg>
    </div>
  );
}

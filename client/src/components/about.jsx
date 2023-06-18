import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <div>
      <div className="names">
        <div className="students">
          <h1>Made by:</h1>
          <div className="profileDiv">
            <h3>
              <strong>Name:</strong> Maneesh Kolli
            </h3>
            <h3>
              <strong>Roll No:</strong> SE20UCSE091
            </h3>
            <h3>
              <strong>Branch:</strong> CSE
            </h3>
            <h3 type="mail">
              <strong>Mail:</strong> maneesh20ucse091@mahindrauniversity.edu.in
            </h3>
            <div className="profIcons">
              <EmailIcon />
              <LinkedInIcon />
              <GitHubIcon />
            </div>
          </div>
          <div className="profileDiv">
            <h3>
              <strong>Name:</strong> Medha Prodduturi
            </h3>
            <h3>
              <strong>Roll No:</strong> SE20UCSE096
            </h3>
            <h3>
              <strong>Branch:</strong> CSE
            </h3>
            <h3 type="mail">
              <strong>Mail:</strong> medha20ucse096@mahindrauniversity.edu.in
            </h3>
            <div className="profIcons">
              <EmailIcon />
              <LinkedInIcon />
              <GitHubIcon />
            </div>
          </div>
        </div>
        <div className="profs">
          <h1>Mentors:</h1>
          <div className="profileDiv">
            <h3>
              <strong>Name:</strong> Dr. Bhanukiran Perabathini
            </h3>
            <h3 id="prr">
              <strong>Profile:</strong>{" "}
              <a
                target="_blank"
                href="https://mahindrauniversity.edu.in/faculty/bhanukiran-perabathini/"
              >
                <AccountBoxIcon />
              </a>
            </h3>
            <h3>
              <strong>Role:</strong> Assistant Professor @ MU
            </h3>
            <h3 type="mail">
              <strong>Mail:</strong> bhanukiran.p@mahindrauniversity.edu.in
            </h3>
            <div className="profIcons">
              <EmailIcon />
              <LinkedInIcon />
              <GitHubIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

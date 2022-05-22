import { Component } from '@angular/core';
import { SocialIcon } from '@ravindusachintha/rs-ng-components';
import {
  faLinkedinIn,
  faGithubAlt,
  faGitlab,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  socialIconList: SocialIcon[] = [
    {
      url: 'https://www.linkedin.com/in/ravindu-sachintha/',
      icon: faLinkedinIn,
    },
    {
      url: 'https://github.com/RavinduSachintha',
      icon: faGithubAlt,
    },
    {
      url: 'https://gitlab.com/Sachintha96',
      icon: faGitlab,
    },
    {
      url: 'https://stackoverflow.com/users/7483559/ravindu-sachintha',
      icon: faStackOverflow,
    },
    {
      url: 'https://twitter.com/RSachintha96',
      icon: faTwitter,
    },
  ];
}

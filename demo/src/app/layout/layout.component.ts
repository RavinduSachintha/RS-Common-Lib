import { Component, OnInit } from '@angular/core';
import {
  faGithubAlt,
  faGitlab,
  faLinkedinIn,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBirthdayCake,
  faCampground,
  faEnvelope,
  faFilm,
  faHeart,
  faMapMarkerAlt,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
import {
  SocialIcon,
  PsContentTextListTypes,
  PsTextListItem,
} from '@ravindusachintha/rs-ng-components';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  listSectionTypes = PsContentTextListTypes;

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

  basicInfoTextItems: PsTextListItem[] = [
    {
      text: 'Negombo, Sri Lanka',
      icon: faMapMarkerAlt,
    },
    {
      text: 'September, 1996',
      icon: faBirthdayCake,
    },
    {
      text: 'Single',
      icon: faHeart,
    },
    {
      url: 'mailto:ravindusachintha53@gmail.com',
      text: 'ravindusachintha53@gmail.com',
      icon: faEnvelope,
    },
  ];

  interestsTextItems: PsTextListItem[] = [
    {
      text: 'Watching Movies',
      icon: faFilm,
    },
    {
      text: 'Travelling & Camping',
      icon: faCampground,
    },
    {
      text: 'Flute Playing',
      icon: faMusic,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

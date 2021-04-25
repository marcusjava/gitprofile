import React, { useState, useEffect } from "react";
import { Profile, Repository } from "../components";
import { useParams, useHistory } from "react-router-dom";
import useProfile from "../hooks/use-profile";
import JwPagination from "jw-react-pagination";
import { toast } from "react-toastify";
import dayjs from "dayjs";

// import { Container } from './styles';

function ProfileContainer() {
  const [pageOfItems, setPageOfItems] = useState([]);
  const { name } = useParams();

  const history = useHistory();
  const { profile, loading, error } = useProfile(name);

  useEffect(() => {
    if (error) {
      toast.error("User not found!");
      history.push("/");
    }
  });

  const getStars = () => {
    const { repos } = profile;

    return repos
      .map((item) => item.stargazers_count)
      .reduce((total, num) => total + num);
  };

  const onChangePage = (items) => {
    setPageOfItems(items);
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Profile.Container>
      <Profile>
        <Profile.Avatar src={profile.avatar_url} alt="Profile" />
        <Profile.Title>{profile.name}</Profile.Title>
        <Profile.SubTitle>{profile.login}</Profile.SubTitle>
        <Profile.Text>{profile.bio}</Profile.Text>
        <Profile.Stats>
          <Profile.StatsItem>
            <i className="fas fa-users"></i> {profile.followers} followers
          </Profile.StatsItem>
          <Profile.StatsItem>
            <i className="far fa-heart"></i> {profile.following} following
          </Profile.StatsItem>
          <Profile.StatsItem>
            <i className="far fa-star"></i> {getStars()} Stars
          </Profile.StatsItem>
        </Profile.Stats>

        <Profile.Info>
          {profile.company && (
            <Profile.InfoItem>
              <i className="far fa-building"></i> {profile.company}
            </Profile.InfoItem>
          )}
          {profile.location && (
            <Profile.InfoItem>
              <i className="fas fa-map-marker-alt"></i> {profile.location}
            </Profile.InfoItem>
          )}
          {profile.email && (
            <Profile.InfoItem>
              <i className="far fa-envelope"></i> {profile.email}
            </Profile.InfoItem>
          )}
          {profile.blog && (
            <Profile.Link href={"http://" + profile.blog} target="_blank">
              <Profile.InfoItem>
                <i className="fas fa-link"></i> {profile.blog}
              </Profile.InfoItem>
            </Profile.Link>
          )}
          {profile.username && (
            <Profile.Link
              href={"http://" + profile.twitter_username}
              target="_blank"
            >
              <Profile.InfoItem>
                <i className="fab fa-twitter"></i> {profile.twitter_username}
              </Profile.InfoItem>
            </Profile.Link>
          )}
        </Profile.Info>
        <Profile.Button onClick={() => history.push("/")}>
          Voltar
        </Profile.Button>
      </Profile>
      <Repository>
        {pageOfItems.map((repo) => (
          <Repository.Item key={repo.id}>
            <Repository.Link href={repo.html_url} target="_blank">
              <Repository.Title>{repo.name}</Repository.Title>
            </Repository.Link>
            <Repository.Description>{repo.description}</Repository.Description>
            <Repository.Stats>
              <Repository.Stars>
                <i className="fa fa-star"></i>
                {repo.stargazers_count} Stars
              </Repository.Stars>
              <Repository.UpdatedAt>
                Updated {dayjs(repo.updated_at).fromNow()}
              </Repository.UpdatedAt>
            </Repository.Stats>
          </Repository.Item>
        ))}
        <Repository.Pagination>
          <JwPagination
            items={profile.repos}
            onChangePage={onChangePage}
            pageSize={5}
          />
        </Repository.Pagination>
      </Repository>
    </Profile.Container>
  );
}

export default ProfileContainer;

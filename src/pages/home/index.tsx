import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts/new">게시글</Link>
          <Link to="/posts/new">프로필</Link>
        </div>
      </header>
      <div className="post__navigation">
        <div className="post__navigation--active">전체</div>
        <div>나의 글</div>
      </div>
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">패스트캠퍼스</div>
                <div className="post__date">2023.07.08 토요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                facilisis massa mi, in ultricies sapien sollicitudin eget. Donec
                hendrerit a eros sit amet bibendum. Integer iaculis enim a
                pretium dapibus. Phasellus quis lorem tempor, sagittis lacus
                sed, blandit lacus. Sed sollicitudin enim vel euismod fringilla.
                Sed egestas semper metus, vel hendrerit tellus vestibulum non.
                Pellentesque varius eget lacus sollicitudin pulvinar. Vivamus
                sagittis neque turpis, ac placerat velit luctus vel. Vestibulum
                molestie mauris augue, ut malesuada ipsum tincidunt vitae.
                Integer in nunc diam. Etiam iaculis laoreet quam, ac rhoncus est
                gravida et. Donec interdum ex sed ante tempus sodales. Donec
                malesuada ex ut ante dictum, quis eleifend odio ornare. Quisque
                lobortis, massa vel egestas mattis, arcu mauris convallis ipsum,
                et porta lectus velit id dui.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <footer>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts/new">게시글</Link>
        <Link to="/posts/new">프로필</Link>
      </footer>
    </div>
  );
}

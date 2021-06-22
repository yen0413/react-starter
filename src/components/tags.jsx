//提示:善用react-snippets套件提供的short cut
//like: imrc , cc ...etc

import React, { Component } from "react";

class Tags extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
    buckets: [],
  };

  render() {
    return (
      //如果不想要使用<div></div>包住全部的話可以用<React.Fragment></React.Fragment>來取代
      <div>
        <div>
          {/* 此寫法請參考Js的運算式 */}
          {this.state.buckets.length === 0 && "Please create a new buckets!"}
        </div>

        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Tags;

import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

class FFooter extends Component {
  render() {
    return (
      <div>
        <Footer size="mini">
          <FooterSection>
            <FooterLinkList>
              <div>
                <a
                  style={{ fontSize: "25px" }}
                  href="https://github.com/DavGabrielian/dav-portfolio"
                >
                  VIEW CODE HERE
                  <i
                    class="fa fa-fw fa-github"
                    style={{ fontSize: "35px" }}
                  ></i>
                </a>
              </div>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default FFooter;

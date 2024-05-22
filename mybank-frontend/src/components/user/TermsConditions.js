import SpaceDiv from "../UI/SpaceDiv";
import styles from "./TermsConditions.module.css";
import {useSelector} from "react-redux";

function TermsConditions() {
    const isLogin = useSelector(state => state.authentication.isUserLogin)

    return <>
        <div className={styles.mainContainer}>
            <div className={styles.contentSection}>
                <div className={styles.title} style={{marginTop: isLogin ? "2rem" : "0rem"}}>Terms & Conditions</div>
                <div className={styles.content}>

                    <h3>Welcome to Banking</h3>
                    <p>
                        These terms and conditions outline the rules and regulations for the use of Banking Website.
                        By accessing this website we assume you accept these terms and conditions. Do not continue to
                        use
                        Website Name if you do not agree to take all the terms and conditions stated on this page.
                        The following terminology applies to these Terms and Conditions, Privacy Statement and
                        Disclaimer
                        Notice
                        and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and
                        compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and
                        “Us”,
                        refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All
                        terms
                        refer to the offer, acceptance and consideration of payment necessary to undertake the process
                        of
                        our
                        assistance to the Client in the most appropriate manner for the express purpose of meeting the
                        Client's
                        needs in respect of provision of the Company's stated services, in accordance with and subject
                        to,
                        prevailing law of the Netherlands. Any use of the above terminology or other words in the
                        singular,
                        plural,
                        capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to
                        same.
                    </p>

                    <h3>Cookies</h3>
                    <p>
                        We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement
                        with
                        the
                        Company Name's Privacy Policy.
                        Most interactive websites use cookies to let us retrieve the user's details for each visit.
                        Cookies
                        are
                        used by our website to enable the functionality of certain areas to make it easier for people
                        visiting
                        our website. Some of our affiliate/advertising partners may also use cookies.
                    </p>

                    <h3>License</h3>
                    <p>
                        Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights
                        for
                        all
                        material on Website Name. All intellectual property rights are reserved. You may access this
                        from
                        Website Name for your own personal use subjected to restrictions set in these terms and
                        conditions.
                        You must not:
                        Republish material from Website Name
                        Sell, rent or sub-license material from Website Name
                        Reproduce, duplicate or copy material from Website Name
                        Redistribute content from Website Name
                        This Agreement shall begin on the date hereof.
                        Parts of this website offer an opportunity for users to post and exchange opinions and
                        information
                        in
                        certain areas of the website. Company Name does not filter, edit, publish or review Comments
                        prior
                        to
                        their presence on the website. Comments do not reflect the views and opinions of Company
                        Name,its
                        agents
                        and/or affiliates. Comments reflect the views and opinions of the person who post their views
                        and
                        opinions. To the extent permitted by applicable laws, Company Name shall not be liable for the
                        Comments
                        or for any liability, damages or expenses caused and/or suffered as a result of any use of
                        and/or
                        posting of and/or appearance of the Comments on this website.
                        Company Name reserves the right to monitor all Comments and to remove any Comments which can be
                        considered inappropriate, offensive or causes breach of these Terms and Conditions.
                        You warrant and represent that:
                        You are entitled to post the Comments on our website and have all necessary licenses and
                        consents to
                        do
                        so;
                        The Comments do not invade any intellectual property right, including without limitation
                        copyright,
                        patent or trademark of any third party;
                        The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful
                        material
                        which is an invasion of privacy
                        The Comments will not be used to solicit or promote business or custom or present commercial
                        activities
                        or unlawful activity.
                        You hereby grant Company Name a non-exclusive license to use, reproduce, edit and authorize
                        others
                        to
                        use, reproduce and edit any of your Comments in any and all forms, formats or media.
                    </p>

                    <h3>Hyperlinking to our Content</h3>
                    <p>
                        The following organizations may link to our Website without prior written approval:
                        Government agencies;
                        Search engines;
                        News organizations;
                        Online directory distributors may link to our Website in the same manner as they hyperlink to
                        the
                        Websites of other listed businesses; and
                        System wide Accredited Businesses except soliciting non-profit organizations, charity shopping
                        malls,
                        and charity fundraising groups which may not hyperlink to our Web site.
                        These organizations may link to our home page, to publications or to other Website information
                        so
                        long
                        as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship,
                        endorsement or
                        approval of the linking party and its products and/or services; and (c) fits within the context
                        of
                        the
                        linking party's site.
                        We may consider and approve other link requests from the following types of organizations:
                        commonly-known consumer and/or business information sources;
                        dot.com community sites;
                        associations or other groups representing charities;
                        online directory distributors;
                        internet portals.
                    </p>
                </div>
            </div>
        </div>
        <SpaceDiv height={3}/>
        <SpaceDiv flexSpace={true}/>
    </>;
}

export default TermsConditions;
/*
* This document is meant to simulate how FSB's end might work. Basically, it calls our function using some input HTML as a string
* and uses the HTML it gets back to render the page. It calls our function each time the page is resized.
*/

var input1 = "<div class='bodyCopy translationCopyEnglish'><div id='tabs' style=\"width: 950px; zdisplay:none\"><div style=\"float: left; width: 450px; min-height:600px\"><h1>T.M. Rajkumar</h1><h2 >Professor</h2> <h3 style=\"padding: 0px; margin: 0px\"> Information Systems & Analytics </h3><br /><h1>Profile</h1><h2>Academic  Background</h2><ul><li>Ph.D. Texas  Tech University, MIS, 1989</li><li>M.S.E.E. Texas  Tech University, Electrical Engineering, 1983</li><li>B.Tech Indian  Institute of Technology, Madras, Electrical (Power), 1977</li></ul><h2>Academic & Professional Experience</h2><ul><li>Professor, Miami University (2016-current)</li><li>Assoc.  Professor, Miami University (1995-2016).</li><li>Asst.  Professor, Miami University (1989-1995).</li><li>Graduate  Assistant, Texas Tech University (1981-1989).</li><li>Testing  Engineer, BHEL (1977-1980).</li></ul><h2>Recent Publications</h2><ul><li>Fang, X., Rajkumar, T.M., Sena, M., & Holsapple, C. (2020).  National Culture, Online Medium Type, and First Impression Bias.   Journal of Organizational Computing and Electronic Commerce., doi: 10.1080/10919392.2020.1713686. </li><li>Havelka, D., & Rajkumar, T.M. (2019). Antecedents to Successful Software Training:  A Research Framework and Preliminary Evidence,Â <em> Issues in                  Information                  Systems</em> Volume 20, Issue 3, pp. 11-21.</li><li>Xiang,F., Rajkumar, T.M., & Sena, M. (in press, 2019). The Effects of National Culture Dimensions and Online Medium Type on Decision Confidence: a Study based on US and China. <em> Issues in                  Information Systems</em> Volume 20, Issue 2, pp. 105-116.</li><li>Chen, J. V., Rungruengsamrit, D., Rajkumar, T.M. & Yen, D. C.   (2013).  Success Of Electronic Commerce Websites: A Comparative Study In Two Countries.  Information & Management.</li><li>Fang, X. & Rajkumar, T.M. (in press, 2013).  The Role of National Culture and Multimedia on First Impression Bias Reduction: An Experimental Study in US and China,.  IEEE Transactions on Professional Communications.</li><li>Mani, R.V.S., Baul, U., Mohanty, R. P., & Rajkumar, T.M. (in press, 2012).  An Empirical Study of Information Technology Infrastructure Capability and its Impact on Digitally Enabled Customer Management Processes in Life Insurance Companies.  International Journal of Business Information Systems.</li><li>Rajkumar, T.M., Anderson, P., Benamati, J. S, & Merhout, J. W. (2011).ÃÂ  Are Student Self-Assessments a Valid Proxy for Direct Assessments in Efforts to Improve Information Systems Courses and Programs? An Empirical Study.ÃÂ ÃÂ <em>Communication of AIS</em>, 28 (1), Article 31.</li><li>Jengchung V. Chen, David C. Yen, T.M. Rajkumar, Nathan A. Tomochko, (2011) The antecedent factors on trust and commitment in supply chain relationships, <em>Computer Standards & Interfaces</em>, Volume 33, Issue 3, March 2011, Pages 262-270,</li><li>Benamati, J. S. & Rajkumar, T.M. (2008).ÃÂ  An Outsourcing Acceptance Model: An Application of TAM to Application Development Outsourcing Decisions. <em>Information Resources Management Journal</em>, 21 (2), 80-102.</li><li>Merhout, J., Benamati, J., Rajkumar, T.M., Anderson, P., & Marado, D. (2008).ÃÂ  Implementing Direct and Indirect Assessment in the MIS Curriculum. <em>Communication of AIS</em>, 23.</li><li>Havelka, D.  & Rajkumar, T.M. (2006). Using the Troubled Project Recovery Framework:  Problem Recognition and Decision to Recover. <em>e-Service Journal, 5 (1)</em>.</li><li>Havelka, D.  & Rajkumar, T.M. (2006). Recovering Troubled Projects: Prescriptions for Sustained  Recovery. <em>Issues in Information Systems,  VII N2</em>, 92-96.</li><li>Aiyer, J.,  Rajkumar, T. M., & Havelka, D. (2005). A Staged Framework for the Recovery  and Rehabilitation Of Troubled IS Development Projects. <em>Project Management Journal, 36 (4)</em>, 32-43.</li><li>Davis, W. S.  & Rajkumar, T. M. (2004). <em>Operating  Systems: A Systematic View-Sixth Edition</em> Addison Wesley.</li><li>Erasala, N.,  Yen, D. C., & Rajkumar, T. M. (2003). Enterprise Application Integration in  the EC World. <em>Computer Standards and  Interfaces</em>.</li></ul><h2>Areas of Expertise</h2><ul><li>Business Intelligence</li><li>Analysis of structured and unstructured data</li><li>Web Development</li><li>Database management systems</li><li>Multimedia</li></ul><h1>Biography</h1><p>T. M. Rajkumar is Professor of Information Systems. He received his B. Tech from Indian Institute of Technology, Madras in 1977, and his masters in Electrical Engineering and PhD in Business from Texas Tech University in 1983 and 1989. </p><p>He has been at Miami University since 1989 teaching various courses in Information Systems. He currently teaches IS Security, Big Data Management, Project Management and Business Intelligence classes both at the undergraduate level and in the Graduate Certification Program for Analytics. He also has industry experience in India and worked in the Transformer manufacturing sector for three years.</p><p>He is the coauthor of two books on operating systems aimed at students in community colleges, and has also authored a workbook on the use of CASE software to accompany systems analysis texts.   His research interests include offshore outsourcing, troubled project management and the use of multimedia in decision making and in removing biases in decision making. His research has appeared in journals such as the Communications of ACM, Information and Management, Communications of the AIS and others. </p><h1>Courses</h1><ul><li>ISA 245 A 8:30-9:50 MW FSB 2050</li><li>ISA 406</li><li> A 1:15-2:35 MW FSB 0021</li><li>B 2:50-4:10 MW FSB 0021</li></ul>          </div><div style=\"float: left; width: 275px; top:0px;left:475px; position:absolute\"><img id=\"profilesphoto\" src=\"http://www.fsb.miamioh.edu/fsb/directory/pic/rajkumtm.jpg\" alt=\"T.M. Rajkumar\" style=\"border:2px solid #B2202D\"  ><!--bio--><h2>Contact Information</h2><ul id=\"zzprofilecontactinfo\"><li><strong>Campus:</strong> Oxford</li><li><strong>Office:</strong> 3009</li><li><strong>Phone:</strong> 513.529.4830</li><li><strong>Email:</strong> <a id=\"profemail\" href=\"mailto:rajkumtm@miamioh.edu\">rajkumtm@miamioh.edu</a></li><!--<li><a href=\"javascript:void(0);\" onClick=\"window.open('postal-address.html','popupWin','toolbar=0,location=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=300,height=225')\">postal address</a></li>--></ul><!--courses--><h2>Office Hours</h2><ul id=\"officehours\"><li>MW 11-12</li></ul><h2>Links</h2><ul id=\"zzprofilemenu\"><!--vitadocbegin<li><a href=\"http://www.fsb.miamioh.edu/fsb/directory/vita/rajkumtm.doc\" TARGET=\"_blank\" class=\"word\">Curriculum Vita</a></li>vitadocend--><li><a href=\"http://www.fsb.miamioh.edu/fsb/directory/vita/rajkumtm.pdf\" TARGET=\"_blank\" class=\"pdf\">Curriculum Vita</a>[PDF]*</li><!--vitahtmbegin<li><a href=\"http://www.fsb.miamioh.edu/fsb/directory/vita/rajkumtm.htm\" TARGET=\"_blank\" class=\"link\">Curriculum Vita</a></li>vitahtmend--><!--webbegin<li><a href=\"http://www.fsb.miamioh.edu/--website--\" TARGET=\"_blank\" class=\"link\">Personal Website</a></li>webend--><!--links--><!--dept--></ul><p>* Accessible version of PDF available upon request.</p><!--epbegin<p id=\"editprofile\"><a href=\"http://www.fsb.muohio.edu/directory/login\">Edit My Profile</a></p>epend--></div></div></div>";
var input2 = "<div class='bodyCopy translationCopyEnglish'><div id='tabs' style=\"width: 950px; zdisplay:none\">   <div style=\"float: left; width: 450px; min-height:600px\"><h1>John \"Skip\" Benamati</h1><h2 >Professor & Chair</h2> <h3 style=\"padding: 0px; margin: 0px\"> Information Systems & Analytics </h3><br /> <h1>Profile</h1>  <h2>Academic Background</h2><ul><li>Ph.D. University of Kentucky, Business Administration-MIS, 1997</li><li>M.S. Marist  College, Information Systems, 1987</li><li>B.S. Indiana University of Pennsylvania, Computer Science, 1984</li></ul><h2>Academic & Professional Experience</h2><ul><li>Chair, Department of Decision Sciences and MIS (2011--Present)</li><li>Professor, Miami University (2009-Present).</li><li>Associate Professor, Miami University (2003-2009).</li><li>Assistant Professor, Miami University (1997-2003).</li><li>Instructor, University of Kentucky (1996-1996).</li><li>Information Technology Consultant, Self Employed (1994-2001).</li><li>Data Architect, IBM (1993-1994)</li><li>Data Base Team Leader, IBM (1991-1993)</li><li>Application Development Product Marketing Specialist, IBM (1989-1991).</li><li>Data Administrator, IBM (1987-1989).</li><li>Adjunct Professor, Marist College (1988).</li><li>Database Administrator, IBM (1984-1987).</li></ul><h2>Recent Publications</h2><ul><li>Arthur Carvalho, Adam Levitt, Seth Levitt, Edward Khaddam, and John Benamati. \“Off-The-Shelf Artificial Intelligence Technologies for Sentiment and Emotion Analysis: A Tutorial on Using IBM Natural Language Processing\". Communications of the AIS, Vol 44, 2019.</li><li>Ozdemir, Z.D., Smith H.J. and Benamati, J.H. Antecedents and Outcomes of Information Privacy Concerns in a Peer Context: An Exploratory Study. European Journal of Information Systems, 26(6), 2017, pp. 642-660.</li><li>Benamati, J.H., Ozdemir, Z.D. and Smith H.J. An Empirical Test of the Antecedents \" Privacy Concerns \" Consequents Model Journal of Information Science, 43(5), 2017, pp. 583-600.</li><li>Xiang F., Lederer, A.L.and Benamati, J.H., The Influence of National Culture on IT Development, Implementation and Support Challenges in China and the U.S. Journal of Global Information Technology Management 19(1), 2016. Pp. 26-43.</li><li>Benamati, J.H., and Rajkumar, T.M. Undergraduate Student Attitudes Toward MIS: Instrument Development and Changing Perceptions of the Field Across Gender and Time Communications of the AIS, Vol. 33, Article 14, December 2013.</li><li>Xiang F., Benamati, J.H., and Lederer, A.L. \"Coping with rapid information technology change in different national cultures\" European Journal of Information Systems, 20(5), 2011, pp. 560-573.</li><li>Rajkumar, T.M.,  Anderson, P., Benamati, J.H. an d Merhout, J.W. \"Are Student Self-Assessments a Valid Proxy for Direct Assessments in Efforts to Improve Information Systems Courses and Programs? An Empirical Study\" Communications of the AIS, Vol. 28, Article 31, 2011.</li><li>Benamati, J.H., Fuller, M.A., Serva, M.A., \"The Productive Tension of Trust and Distrust: The Coexistence and Relative Role of Trust and Distrust in Online Banking\" Journal of Organizational Computing and Electronic Commerce, 20(4), 2010, 328-246.</li><li>Benamati, J.H., Fuller, M.A., Serva, M.A., and Baroudi, J.J. \"Clarifying the Integration of Trust and TAM in E-Commerce Environments: Implications for Systems Design and Management\" IEEE Transactions on Engineering Management, 57(3), 2010, pp. 380-393.</li><li>Benamati, J.H., Ozdemir, Z.D. and Smith, H.J. \"'Aligning Undergraduate IS Curricula with Industry Needs\" Communications of the ACM, 53(3), March 2010, pp. 152-156 </li><li>Benamati, J.H. and Lederer, A.L., \"Managing the Impact of Rapid IT Change\" Information Resource Management Journal, 23(1), 2010, 1-16. </li></ul><h2>Honors & Awards</h2><ul><li>2010: Richard T. Farmer Faculty Award for Research Excellence.</li><li>2007: Howe Writing Center Best Practices in Teaching Writing Award, Howe  Writing Center.</li><li>2006: Miami University Alumni Association Effective Educator Award Nominee.</li><li>2006: Honored Professor Award Nominee, Associated Student Government.</li><li>2006: Junior Faculty Outstanding Research Award Recipient, Farmer School of Business.</li><li>2006: Business Student Organization Faculty Advisory of the Year, Business Student Advisory Council.</li><li>2004, 2003: Honored Professor Award Nominee, Associated Student Government.</li><li>2003: Faculty Advisor of the Year, Farmer  School of Business.</li><li>2003: Effective Educator Award Nominee, Miami  University Alumni Association.</li><li>2002: Honorary Membership, Delta Sigma Phi Business Fraternity.</li><li>2002: Honored Professor Award Nominee, Associated Student Government.</li><li>2002: Teaching Effectiveness Award, Farmer  School of Business.</li><li>2000: Honored Professor Award Nominee, Associated Student Government.</li><li>2000: Best Paper Award, Association for Computing Machinery SIGCPR Conference.</li><li>1997, 1996, 1995, 1994: Quality Achievement Fellowship, University of Kentucky.</li><li>1997, 1996, 1995, 1994: Presidential Fellowship (1 of 9 awarded university wide), University of Kentucky.</li><li>1997: Doctoral Dissertation Fellowship (1 of 10 awarded nationally), Richard D. Irwin Foundation.</li></ul><h2>Professional Interests</h2><ul><li><strong>Research: </strong>Management of IS, IS Strategy, Trust in Electronic Commerce, Information Privacy</li></ul><h2>Areas of Expertise</h2><ul><li>Changing technology</li><li>IT strategy</li><li>Information technology</li><li>Outsourcing</li><li>Technology</li><li>Trust in e-commerce</li><li>e-Commerce</li></ul> <h1>Biography</h1><p>Dr. John \"Skip\" Benamati earned a bachelorâs degree in Computer Science from Indiana University of Pennsylvania.  He worked for International Business Machines for 10 years in various roles, leaving as a national level consultant doing application and data architecture work.  He went on to receive his PhD in information systems from the University of Kentucky and joined the Miami faculty in 1997.  </p><p>Dr. Benamati has received multiple teaching awards and as well as the Farmer School junior and senior faculty outstanding researcher awards in the spring of 2006 and 2010.  His research interests are changing information technology (IT), IT management/strategy, trust in online environments, and assessing the IT curriculum.  His research has appeared in the Journal of Management Information Systems, Decision Sciences, Communications of the ACM, Information and Management, Decision Support Systems, Communications of the AIS, and elsewhere.  </p><p>He also published an introductory electronic commerce textbook and taught a variety of graduate and undergraduate courses on a range of information technology topics including ITâs role in organizations, IT management and strategy, IT infrastructure, IT project management, electronic commerce, and Web-based application development.  Currently, he is leading the Top 25 redesign of the introductory Information Systems class in the business core.</p><p></p><h1>Courses</h1><ul><li> ISA 235 A 11:40-1 MW FSB 0024</li></ul></div><div style=\"float: left; width: 275px; top:0px;left:475px; position:absolute\"><img id=\"profilesphoto\" src=\"http://www.fsb.miamioh.edu/fsb/directory/pic/benamajh.jpg\" alt=\"John \"Skip\" Benamati\" style=\"border:2px solid #B2202D\"  ><!--bio--><h2>Contact Information</h2><ul id=\"zzprofilecontactinfo\"><li><strong>Campus:</strong> Oxford</li><li><strong>Office:</strong> 3095A</li><li><strong>Phone:</strong> 513.529.4826</li><li><strong>Email:</strong> <a id=\"profemail\" href=\"mailto:benamajh@miamioh.edu\">benamajh@miamioh.edu</a></li><!--<li><a href=\"javascript:void(0);\" onClick=\"window.open('postal-address.html','popupWin','toolbar=0,location=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=300,height=225')\">postal address</a></li>--></ul><!--courses--><h2>Office Hours</h2><ul id=\"officehours\"><li> MTR 1-2:15</li><li>W 10-11:15</li></ul><h2>Links</h2><ul id=\"zzprofilemenu\"><!--vitadocbegin<li><a href=\"http://www.fsb.miamioh.edu/fsb/directory/vita/benamajh.doc\" TARGET=\"_blank\" class=\"word\">Curriculum Vita</a></li>vitadocend--><li><a href=\"http://www.fsb.miamioh.edu/fsb/directory/vita/benamajh.pdf\" TARGET=\"_blank\" class=\"pdf\">Curriculum Vita</a>[PDF]*</li><!--vitahtmbegin<li><a href=\"http://www.fsb.miamioh.edu/fsb/directory/vita/benamajh.htm\" TARGET=\"_blank\" class=\"link\">Curriculum Vita</a></li>vitahtmend--><!--webbegin<li><a href=\"http://www.fsb.miamioh.edu/--website--\" TARGET=\"_blank\" class=\"link\">Personal Website</a></li>webend--><!--links--><!--dept--></ul><p>* Accessible version of PDF available upon request.</p><!--epbegin<p id=\"editprofile\"><a href=\"http://www.fsb.muohio.edu/directory/login\">Edit My Profile</a></p>epend--></div></div></div>";

// Change this line to change the test case
var input = input2;

$(document).ready(function() {
    let temp = input;

    input = conditionallyConvertToMobile(input);

    let html = $.parseHTML(input);
    $("body").html(html);

    input = temp;
});

$(window).resize(function() {
    let temp = input;

    input = conditionallyConvertToMobile(input);

    let html = $.parseHTML(input);
    $("body").html(html);

    input = temp;
});


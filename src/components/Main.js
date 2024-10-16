import React from "react";
import BNY from "../images/bny.png"
import grubhub from "../images/grubhub.png"
import monotype from "../images/monotype.png"

const Main = () => {
    return(
        <main>
            <section id="title"><label>EXPERIENCE</label></section>
            <section id="experience">
                <h2>Monotype</h2>
                <img src={monotype} alt="monotype logo"/>
                <h3>Senior Manager of Digital Implementation <br/> Apr 2024 – Current</h3>
                <p>
                Reporting in to the C-Suite, ownership over the execution of key company digital initiatives including client-facing APIs, Working closely with the Product Owners, Sales, Partnerships, Production Engineering, Customer Success, and clients to ensure internal and external products are delivered successfully
- Successfully took API product 0->1 implementing and organizing a pipeline of future clients. <br/>
- Coordinated cross-functionally with sales, engineering, solution architects, QA, SRE, and support to create a scalable, repeatable process to support the new product.<br/>
- Groomed and managed product backlog to develop a clear vision and roadmap, aiding the product owner. <br/>
- Managed multiple client integrations concurrently, ensuring timely delivery and exceeding stakeholder expectations.<br/>
- Ownership over market research project, collaboration with a 3rd party to evaluate how font changes on a website influence customer purchase behavior and overall user experience.  Outcomes used by sales teams to create pitch decks for large enterprise clients<br/>
- Led documentation, training, and transition for internal and external Customer Success, Customer Support, and SRE teams.<br/>
- Created a product advisory council to help continually drive product direction.
</p>
                <h2>Grubhub</h2>
                <img src={grubhub}alt="grubhub logo"/>
                <h3>Senior Manager of Technical Product Operations <br/>  May 2021 – Apr 2024</h3>
                <p>


Senior manager with oversight of a team responsible for implementing and supporting SaaS (Mobile Ordering) and Hardware (POSs, Kiosks, BOH hardware) solutions for clients, primarily in higher education.  With in-depth knowledge of campus products, served as a pivotal link between Engineering, Product, Support Operations, CSM, and Sales teams. Managed system integrations, SSO implementation, L3 Support,and SRE & System monitoring
Promotion to Senior Manager within 7 months for exceptional performance and expanded responsibilities including oversight of external Data Delivery, PCI Audits, and Sales engineering.
Oversaw implementations for 200 clients over 3 years
Cultivated and managed key internal and external relationships including Clients, Campus Card Providers, PCI auditors, and external vendors through conference attendance and site visits. 
Owned the rollout of all new features and versions, including communications, training and monitoring against OKRs
Led intake and prioritization of product bugs and feature requests, conducting discovery, analysis, and impact for Campus organization
Product Evangelist, collaborating with product managers to shape product direction and managing the rollout of all new products and features 
Directed data analytics initiatives, supporting internal and external customers through  Data integrations, custom SQL reports, and dashboards.
Internal Product Manager dedicated to serving in-house tooling.  Led the team through 100+ platform improvements
Implemented policies resulting in savings of $100,000 to $200,000  annually for the organization.
Provided coaching and mentorship to the team, focusing on client and industry knowledge, product performance, and analytical tooling, and doubled the size of the team over 3 years.  
Served as the highest point of escalation for our internal teams and clients with a record of de-escalating key clients who were at risk of contract termination.
</p>

<h2>BNY</h2>
<img src={BNY} alt="bny logo"/>
<h3>Data Delivery Business Analysis Manager <br/> Jul 2016 – May 2021</h3>
<p>


Held various roles within fund and institutional accounting technology ending in being a Business analyst manager overseeing the custom data delivery team responsible for setting up and maintaining bi-directional custom data integrations between BNY Mellon and its accounting customers
Managed a team of Business Analysts owning scope, objectives, constraints, and assumptions for large, strategic, multi-year projects, primarily new client  implementations & BAU changes for 
Product owner for implementing a client-facing self-serve data integration system.
Key contact for reviewing and resolving data issues for clients.
Personally handled key initiatives including, successfully migrating all FAT teams from Waterfall to Agile methodology including implementing JIRA
</p>

<h3>Senior Business Analyst <br/> Aug 2013 – Jul 2016</h3>
<p>


Supervised a virtual team responsible for creating and delivering MIS reporting.
Owned all data analysis, reports, KPI, and KRI dashboards for clients and management.
Managed numerous projects and process improvements for investment accounting organizations.
</p>

<h3>Migration Project Manager <br/> Jun 2012– Aug 2013</h3>
<p>


Managed the project of migrating roles from the UK to India, involving relocating  to India, training and managing a team of 30 individuals across 4 functions  over 1 year
Owned all data analysis, reports, and KPI & KRI dashboards for clients and management.
Supervised a virtual team responsible for creating and delivering MIS reporting, managing numerous projects, and process improvements for investment accounting.
</p>

<h3>Junior Business Analyst <br/> Jan 2009 – Jun 2012</h3>
<p>


Department technical & process expert and handled queries from internal and external clients.
Department trainer for new hires across multiple functions within institutional accounting.
Managed the project to migrate accounting records to a new accounting platform including creating custom processing and reconciliation tooling to save headcount, errors, and time.


                </p>
            </section>
            <section id="title"><label>EDUCATION</label></section>
            <section id="education">

            <h3>University of Derby</h3>
            <p>Masters of Strategic Management</p>
            <h3>University of Derby</h3>
            <p>Associates of Mathematics & Computer Science</p>
            <h3>University of Virginia</h3>
            <p>Certification in Digital Product Management</p>
            <p></p>
            <h3>Meta</h3>
            <p>Front End Developer Professional Certificate</p>
            <h3>Atlassian</h3>
            <p>Agile Project Management Professional Certificate</p>
            <h3>Scrum Alliance</h3>
            <p>Certified Scrum Master</p>

            </section>
        </main>
    )
}

export default Main;
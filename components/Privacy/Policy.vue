<template>
  <section class="pb-25 pt-20 position-relative">
    <div class="container">
      <div class="the_breadcrumb_conatiner_page">
        <div class="the_breadcrumb">
          <div class="breadcrumbs">
            <i class="fas fa-home"></i>

            <NuxtLink :to="{ name: 'index' }"> bredh </NuxtLink>/

            <NuxtLink :to="{ name: 'help-center' }"> help-center </NuxtLink>/
            Privacy policy
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 help-center-header">
          <h5 class="help-center-title">
            <span>Last Revised: 06/08/2022</span>Bredh Privacy policy
          </h5>
          <p class="help-center-text">
            Coodiv team cares about your privacy. For this reason, we collect
            and use personal information only as needed to deliver our products,
            services, websites and mobile applications, and to communicate with
            you about the same, or as you have requested
            <b>(collectively, our “Services”)</b>. Your personal information
            includes information such as:
          </p>
        </div>
      </div>

      <div class="row justify-content-start mr-tp-20">
        <div class="col-md-9 privacy-content mr-tp-40">
          <h4>What information we collect, how we collect it, and why</h4>
          <p>
            Our Privacy Policy not only explains how and why we use your
            personal information that we collect, but also how you can access,
            update or otherwise take control of your personal information. We’ve
            also created a Trust Center that offers answers to your most common
            questions, quick links to access your Account Settings, instructions
            on how to exercise certain rights that might be available to you,
            and definitions to key terms and concepts noted in this
            <b>Privacy Policy.</b>
          </p>
          <p>
            If at any time you have questions about our practices or any of your
            rights described below, you may reach our Data Protection Officer
            (“DPO”) and our dedicated team that supports this office by
            contacting us at <b>privacy@coodiv.net</b>. This inbox is actively
            monitored and managed so that we can deliver an experience that you
            can confidently trust.
          </p>
          <ul>
            <li>Processing credit card payments</li>
            <li>Serving advertisements (more on this topic below)</li>
            <li>Conducting contests or surveys</li>
            <li>
              Performing analysis of our Services, customer demographics, and
              sentiment
            </li>
            <li>
              Communicating with you, such as by way of email or survey delivery
            </li>
            <li>Customer relationship management</li>
            <li>Security, risk management and compliance</li>
            <li>Recruiting support and related services.</li>
          </ul>

          <h4>Transfer of personal information abroad.</h4>
          <p>
            If you utilize our Services from a country other than the country
            where our servers are located, your personal information may be
            transferred across international borders, which will only be done
            when necessary for the performance of our contract with you, when we
            have your consent to do so, or subject to the appropriate standard
            contractual clauses. Also, when you call us or initiate a chat, we
            may provide you with support from one of our global locations
            outside your country of origin.
          </p>
          <p>
            We cooperate with government and law enforcement officials and
            private parties to enforce and comply with the law. We may disclose
            any information about you to government or law enforcement officials
            or private parties as we, in our sole discretion, believe necessary
            or appropriate to respond to claims and legal process (such as
            subpoena requests), to protect our property and rights or the
            property and rights of a third party, to protect the safety of the
            public or any person, or to prevent or stop activity we consider to
            be illegal or unethical.<br />
            To the extent we are legally permitted to do so, we may take
            reasonable steps to notify you if we are required to provide your
            personal information to third parties as part of legal process. We
            will also share your information to the extent necessary to comply
            with any ICANN, registry or ccTLD rules, regulations and policies
            when you register a domain name with us. For reasons critical to
            maintaining the security, stability and resiliency of the Internet,
            this includes the transfer of domain name registration information
            to the underlying domain registry operator and escrow provider, and
            publication of that information as required by ICANN in the public
            WHOIS database or with other third parties that demonstrate a
            legitimate legal interest to such information.
          </p>
          <br />

          <h4>How we secure, store and retain your data.</h4>
          <p>
            We follow generally accepted standards to store and protect the
            personal information we collect, both during transmission and once
            received and stored, including utilization of encryption where
            appropriate.
          </p>
          <p>
            We retain personal information only for as long as necessary to
            provide the Services you have requested and thereafter for a variety
            of legitimate legal or business purposes. These might include
            retention periods:
          </p>
          <ul>
            <li>
              mandated by law, contract or similar obligations applicable to our
              business operations;
            </li>
            <li>
              for preserving, resolving, defending or enforcing our
              legal/contractual rights; or
            </li>
            <li>
              needed to maintain adequate and accurate business and financial
              records.
            </li>
          </ul>
          <p>
            If you have any questions about the security or retention of your
            personal information, you can contact us at
            <a href="#">privacy@coodiv.net</a>
          </p>
          <br />
        </div>

        <div class="col-md-3">
          <h5 class="immediate-help-center-title">
            Need some immediate <br />help ?
          </h5>
          <p class="immediate-help-center-text">
            our suuport team here for you 24/7
          </p>

          <a class="immediate-help-center-link" href="#">00213 123 45 67 89</a>
          <a class="immediate-help-center-link" href="#">support@coodiv.net</a>

          <NuxtLink
            class="immediate-help-center-link"
            :to="{ name: 'contact-us' }">
            send a leter
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

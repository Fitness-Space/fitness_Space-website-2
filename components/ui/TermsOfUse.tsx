"use client";

import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";

export default function TermsOfUse() {
  return (
    <Container maxW="4xl" py={16} color="#141414">
      <Stack gap={6}>
        <Heading color="#141414" size="lg" textAlign="center">
          Terms of Use
        </Heading>

        <Text color="#141414" fontWeight="bold">
          Last Updated: 06/12/2025
        </Text>

        {/* 1. Introduction */}
        <Heading size="md" color="#141414" mt={8}>
          1. Introduction &amp; Acceptance of Terms
        </Heading>

        <Text color="#141414">
          Welcome to Fitness Space ("we," "our," or "us"). Our application
          provides a digital platform that promotes a healthier lifestyle
          through guided home workouts, AI-assisted nutritional guidance,
          community support, and coaching.
        </Text>

        <Text color="#141414">
          By accessing or using the Fitness Space website, mobile application,
          and services (collectively, the “Service”), you agree to be bound by
          these Terms of Use (“Terms”). If you do not agree to these Terms, you
          may not access or use the Service. Your use of the Service also
          constitutes your agreement to our Privacy Policy, which is
          incorporated herein by reference.
        </Text>

        <Text fontWeight="semibold">
          The Service is not intended for users under the age of 16, and you
          must be at least 18 years old to use it. If you are between 16 and the
          age of majority in your jurisdiction, you must have your parent or
          guardian's permission to use the Service.
        </Text>

        {/* 2. Description */}
        <Heading size="md" mt={8}>
          2. Description of Service &amp; Critical Disclaimer
        </Heading>

        <Text>
          Fitness Space provides a digital platform encompassing AI-personalized
          meal guidance, home workout programs, and community support led by
          expert coaches.
        </Text>

        <Text fontWeight="bold">Critical Disclaimer: No Medical Advice</Text>

        <Text>
          Fitness Space provides wellness information, fitness guidance, and
          community support. OUR COACHES ARE NOT LICENSED MEDICAL PROFESSIONALS,
          DIETICIANS, OR NUTRITIONISTS UNLESS EXPLICITLY STATED. EVEN IN CASES
          WHERE THEY ARE, THE SERVICE IS NOT INTENDED TO BE, AND DOES NOT
          CONSTITUTE, MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT. YOU SHOULD ALWAYS
          CONSULT WITH A QUALIFIED HEALTHCARE PROFESSIONAL BEFORE STARTING ANY
          NEW FITNESS OR NUTRITION PROGRAM, ESPECIALLY IF YOU HAVE ANY
          PRE-EXISTING MEDICAL CONDITIONS, ARE PREGNANT, OR ARE POST-PARTUM.
        </Text>

        <Text fontWeight="bold">Acknowledgment of Inherent Risks</Text>

        <Text>
          You understand and acknowledge that participating in physical
          exercise, whether using our guided workouts or other content, carries
          inherent risks of injury, including serious injury or death. YOU
          VOLUNTARILY ASSUME ALL SUCH RISKS.
        </Text>

        {/* 3. User Account */}
        <Heading size="md" mt={8}>
          3. User Account &amp; Responsibilities
        </Heading>

        <Text>
          To access certain features, you must create an account. You agree to
          provide accurate and complete information and to keep this information
          updated.
        </Text>

        <Text>You are responsible for:</Text>

        <Box pl={4}>
          <Text>
            • Maintaining the confidentiality of your account credentials.
          </Text>
          <Text>• All activities that occur under your account.</Text>
          <Text>
            • Your own health and well-being. You represent that you are in good
            physical condition and have no medical condition that would prevent
            your safe participation in our programs. You agree to listen to your
            body and cease any activity that causes pain or severe discomfort.
          </Text>
        </Box>

        {/* 4. Subscription */}
        <Heading size="md" mt={8}>
          4. Subscription, Fees, and Cancellation
        </Heading>

        <Text>Access to the full Service requires a paid subscription.</Text>

        <Text>
          <strong>Fees:</strong> You agree to pay all applicable subscription
          fees as described on the Service. Fees may be changed at any time with
          notice.
        </Text>

        <Text>
          <strong>Auto-Renewal:</strong> Your subscription will automatically
          renew at the end of each billing period unless you cancel it before
          the renewal date.
        </Text>

        <Text>
          <strong>Cancellation:</strong> The App may offer a 30-day free trial.
          Upon expiry of the free trial, your subscription will automatically
          renew every 30 days unless canceled by you at least 24 hours before
          the end of the current billing period.
        </Text>

        <Text>
          <strong>Refunds:</strong> All fees are non-refundable, except as
          required by law or the policies of the app stores.
        </Text>

        <Text>
          <strong>Consumer Rights:</strong> If you are a resident of the
          European Union, United Kingdom, or other jurisdictions with statutory
          consumer protection laws, you may have additional rights, including a
          cooling-off period of up to 14 days for digital services purchased
          online. These rights apply in addition to our policies and any
          applicable app store refund rules. Where required by law, you may
          cancel your subscription within the statutory period and receive a
          refund.
        </Text>

        {/* 5. User Conduct */}
        <Heading size="md" mt={8}>
          5. User Conduct &amp; Community Guidelines
        </Heading>

        <Text>You agree not to use the Service to:</Text>

        <Box pl={4}>
          <Text>
            • Post any content that is unlawful, harmful, threatening, abusive,
            harassing, defamatory, or otherwise objectionable.
          </Text>
          <Text>
            • Impersonate any person or entity, including a Fitness Space coach
            or employee.
          </Text>
          <Text>
            • Post unauthorized medical advice or promote dangerous,
            non-scientific practices.
          </Text>
          <Text>
            • Engage in body-shaming, harassment, or make derogatory comments
            about other users.
          </Text>
          <Text>• Infringe upon any intellectual property rights.</Text>
        </Box>

        <Text>
          We reserve the right, but are not obligated, to remove any user
          content and to suspend or terminate your account for any violation of
          these conduct rules, at our sole discretion.
        </Text>

        {/* 6. Intellectual Property */}
        <Heading size="md" mt={8}>
          6. Intellectual Property
        </Heading>

        <Text>
          The Service, including its original content, features, functionality,
          design, and branding, are owned by Fitness Space and are protected by
          international copyright and intellectual property laws. We grant you a
          limited, non-exclusive, non-transferable license to access and use the
          Service for your personal, non-commercial use.
        </Text>

        <Text>
          You retain ownership of any content you post, such as progress photos
          or comments ("User Content"). By posting User Content, you grant
          Fitness Space a worldwide, royalty-free, sublicensable license to use,
          display, and distribute that content in connection with providing the
          Service.
        </Text>

        {/* 7. Disclaimer */}
        <Heading size="md" mt={8}>
          7. Disclaimers &amp; Limitation of Liability
        </Heading>

        <Text>
          THE SERVICE AND ALL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS
          AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND. FITNESS SPACE
          MAKES NO GUARANTEES, REPRESENTATIONS, OR WARRANTIES REGARDING SPECIFIC
          FITNESS, HEALTH, OR WEIGHT-LOSS RESULTS. INDIVIDUAL RESULTS WILL VARY
          BASED ON A USER'S DEDICATION, EFFORT, GENETICS, DIET, AND OTHER
          FACTORS BEYOND OUR CONTROL.
        </Text>

        <Text>
          TO THE FULLEST EXTENT PERMITTED BY LAW, FITNESS SPACE, ITS DIRECTORS,
          EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
          WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
          INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR
          INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF
          ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE
          SERVICE; AND (IV) ANY PERSONAL INJURY, HEALTH ISSUES, OR DAMAGES
          ARISING FROM YOUR USE OF THE WORKOUTS, MEAL PLANS, OR OTHER CONTENT
          PROVIDED BY THE SERVICE.
        </Text>

        {/* 8. Termination */}
        <Heading size="md" mt={8}>
          8. Termination
        </Heading>

        <Text>
          We may terminate or suspend your account and access to the Service
          immediately, without prior notice or liability, for any reason,
          including if you breach these Terms.
        </Text>

        {/* 9. Governing Law */}
        <Heading size="md" mt={8}>
          9. Governing Law
        </Heading>

        <Text>
          These Terms shall be governed by the laws of the Federal Republic of
          Nigeria, without regard to its conflict of law provisions.
        </Text>

        <Text fontWeight="semibold">
          International Note: If you are a resident of the European Union,
          United Kingdom, or United States, you may also have rights under the
          mandatory consumer protection laws of your country of residence, and
          nothing in these Terms limits those rights.
        </Text>

        {/* 10. Changes */}
        <Heading size="md" mt={8}>
          10. Changes to Terms
        </Heading>

        <Text>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. We will notify you of any material changes by
          posting the new Terms on this site, updating the "Last Updated" date,
          and/or by sending you an in-app notification. Your continued use of
          the Service after the effective date of the revised Terms constitutes
          your acceptance of them.
        </Text>

        {/* 11. Contact */}
        <Heading size="md" mt={8}>
          11. Contact Us
        </Heading>

        <Text>
          If you have any questions about these Terms, please contact us at:
          info@getfitness.space.
        </Text>

        <Text>46 Kenneth Road, Achara Layout, Enugu, Enugu State.</Text>

        {/* Western Compliance */}
        <Heading size="md" mt={8}>
          Western Compliance Additions
        </Heading>

        <Heading size="sm" mt={6}>
          Data Protection &amp; Privacy (GDPR/CCPA)
        </Heading>

        <Text>
          Users located in the European Union, United Kingdom, and California
          have specific rights under applicable data protection laws (including
          the General Data Protection Regulation (GDPR) and the California
          Consumer Privacy Act (CCPA)). These rights include the ability to
          access, correct, delete, or restrict the processing of your personal
          data. Please refer to our Privacy Policy for details on how to
          exercise these rights.
        </Text>

        <Heading size="sm" mt={6}>
          Age of Majority
        </Heading>

        <Text>
          In jurisdictions where the age of majority is 18, you must be at least
          18 years old to use the Service without parental consent. If you are
          between 16 and 18, you may only use the Service with verifiable
          parental or guardian consent.
        </Text>

        <Heading size="sm" mt={6}>
          Dispute Resolution / Arbitration
        </Heading>

        <Text>
          If you are a resident of the United States, any dispute arising out of
          or relating to these Terms or the Service shall be resolved through
          binding arbitration in accordance with the rules of the American
          Arbitration Association. Arbitration shall take place in English and
          in a location mutually agreed upon. Users outside the United States
          may have rights to bring claims in their local courts under applicable
          consumer protection laws.
        </Text>
      </Stack>
    </Container>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import default styles
import Card from './Card'; // Import the Card component
import '../src/tabs.css'



const tabData = [
  {
    id: 'tab1',
    label: 'Domain',
    cards: [
      { title: '.COM', subtitle: '5.99/yr', text: 'Instead of 10.09/yr', buttonLabel: 'Buy now' },
      { title: '.NET', subtitle: '6.99/yr', text: 'Instead of 11.09/yr', buttonLabel: 'Buy now' },
      { title: '.ORG', subtitle: '7.99/yr', text: 'Instead of 12.09/yr', buttonLabel: 'Buy now' },
      { title: '.CO', subtitle: '8.99/yr', text: 'Instead of 13.09/yr', buttonLabel: 'Buy now' },
      { title: '.INFO', subtitle: '9.99/yr', text: 'Instead of 14.09/yr', buttonLabel: 'Buy now' },
      { title: '.BIZ', subtitle: '10.99/yr', text: 'Instead of 15.09/yr', buttonLabel: 'Buy now' },
      { title: '.US', subtitle: '11.99/yr', text: 'Instead of 16.09/yr', buttonLabel: 'Buy now' },
      { title: '.MOBI', subtitle: '12.99/yr', text: 'Instead of 17.09/yr', buttonLabel: 'Buy now' },
    ],
  },
  {
    id: 'tab2',
    label: 'Hosting',
    cards: [
      { title: 'Basic Plan', subtitle: '3.99/mo', text: 'Instead of 7.99/mo', buttonLabel: 'Buy now' },
      { title: 'Standard Plan', subtitle: '5.99/mo', text: 'Instead of 9.99/mo', buttonLabel: 'Buy now' },
      { title: 'Premium Plan', subtitle: '9.99/mo', text: 'Instead of 14.99/mo', buttonLabel: 'Buy now' },
      { title: 'Business Plan', subtitle: '12.99/mo', text: 'Instead of 19.99/mo', buttonLabel: 'Buy now' },
      { title: 'Pro Plan', subtitle: '15.99/mo', text: 'Instead of 24.99/mo', buttonLabel: 'Buy now' },
      { title: 'Ultimate Plan', subtitle: '18.99/mo', text: 'Instead of 29.99/mo', buttonLabel: 'Buy now' },
      { title: 'Enterprise Plan', subtitle: '21.99/mo', text: 'Instead of 34.99/mo', buttonLabel: 'Buy now' },
      { title: 'Corporate Plan', subtitle: '24.99/mo', text: 'Instead of 39.99/mo', buttonLabel: 'Buy now' },
    ],
  },
  {
    id: 'tab3',
    label: 'Dedicated Servers',
    cards: [
      { title: 'Basic Server', subtitle: '49.99/mo', text: 'Instead of 99.99/mo', buttonLabel: 'Buy now' },
      { title: 'Standard Server', subtitle: '69.99/mo', text: 'Instead of 139.99/mo', buttonLabel: 'Buy now' },
      { title: 'Pro Server', subtitle: '99.99/mo', text: 'Instead of 199.99/mo', buttonLabel: 'Buy now' },
      { title: 'Business Server', subtitle: '129.99/mo', text: 'Instead of 259.99/mo', buttonLabel: 'Buy now' },
      { title: 'Enterprise Server', subtitle: '159.99/mo', text: 'Instead of 319.99/mo', buttonLabel: 'Buy now' },
      { title: 'Ultimate Server', subtitle: '189.99/mo', text: 'Instead of 379.99/mo', buttonLabel: 'Buy now' },
      { title: 'Corporate Server', subtitle: '219.99/mo', text: 'Instead of 439.99/mo', buttonLabel: 'Buy now' },
      { title: 'Supreme Server', subtitle: '249.99/mo', text: 'Instead of 499.99/mo', buttonLabel: 'Buy now' },
    ],
  },
  {
    id: 'tab4',
    label: 'Virtual Cloud Servers',
    cards: [
      { title: 'Basic Cloud', subtitle: '9.99/mo', text: 'Instead of 19.99/mo', buttonLabel: 'Buy now' },
      { title: 'Standard Cloud', subtitle: '14.99/mo', text: 'Instead of 29.99/mo', buttonLabel: 'Buy now' },
      { title: 'Pro Cloud', subtitle: '19.99/mo', text: 'Instead of 39.99/mo', buttonLabel: 'Buy now' },
      { title: 'Business Cloud', subtitle: '24.99/mo', text: 'Instead of 49.99/mo', buttonLabel: 'Buy now' },
      { title: 'Enterprise Cloud', subtitle: '29.99/mo', text: 'Instead of 59.99/mo', buttonLabel: 'Buy now' },
      { title: 'Ultimate Cloud', subtitle: '34.99/mo', text: 'Instead of 69.99/mo', buttonLabel: 'Buy now' },
      { title: 'Corporate Cloud', subtitle: '39.99/mo', text: 'Instead of 79.99/mo', buttonLabel: 'Buy now' },
      { title: 'Supreme Cloud', subtitle: '44.99/mo', text: 'Instead of 89.99/mo', buttonLabel: 'Buy now' },
    ],
  },
  {
    id: 'tab5',
    label: 'WordPress Hosting',
    cards: [
      { title: 'Basic WP', subtitle: '2.99/mo', text: 'Instead of 5.99/mo', buttonLabel: 'Buy now' },
      { title: 'Standard WP', subtitle: '4.99/mo', text: 'Instead of 9.99/mo', buttonLabel: 'Buy now' },
      { title: 'Pro WP', subtitle: '6.99/mo', text: 'Instead of 13.99/mo', buttonLabel: 'Buy now' },
      { title: 'Business WP', subtitle: '8.99/mo', text: 'Instead of 17.99/mo', buttonLabel: 'Buy now' },
      { title: 'Enterprise WP', subtitle: '10.99/mo', text: 'Instead of 21.99/mo', buttonLabel: 'Buy now' },
      { title: 'Ultimate WP', subtitle: '12.99/mo', text: 'Instead of 25.99/mo', buttonLabel: 'Buy now' },
      { title: 'Corporate WP', subtitle: '14.99/mo', text: 'Instead of 29.99/mo', buttonLabel: 'Buy now' },
      { title: 'Supreme WP', subtitle: '16.99/mo', text: 'Instead of 33.99/mo', buttonLabel: 'Buy now' },
    ],
  },
  // Add more tabs with similar structure if needed
  {
    id: 'tab6',
    label: 'Email Hosting',
    cards: [
      { title: 'Basic Email', subtitle: '1.99/mo', text: 'Instead of 3.99/mo', buttonLabel: 'Buy now' },
      { title: 'Standard Email', subtitle: '2.99/mo', text: 'Instead of 5.99/mo', buttonLabel: 'Buy now' },
      { title: 'Pro Email', subtitle: '3.99/mo', text: 'Instead of 7.99/mo', buttonLabel: 'Buy now' },
      { title: 'Business Email', subtitle: '4.99/mo', text: 'Instead of 9.99/mo', buttonLabel: 'Buy now' },
      { title: 'Enterprise Email', subtitle: '5.99/mo', text: 'Instead of 11.99/mo', buttonLabel: 'Buy now' },
      { title: 'Ultimate Email', subtitle: '6.99/mo', text: 'Instead of 13.99/mo', buttonLabel: 'Buy now' },
      { title: 'Corporate Email', subtitle: '7.99/mo', text: 'Instead of 15.99/mo', buttonLabel: 'Buy now' },
      { title: 'Supreme Email', subtitle: '8.99/mo', text: 'Instead of 17.99/mo', buttonLabel: 'Buy now' },
    ],
  },
  {
    id: 'tab7',
    label: 'VPS Hosting Server',
    cards: [
      { title: 'Basic VPS', subtitle: '9.99/mo', text: 'Instead of 19.99/mo', buttonLabel: 'Buy now' },
      { title: 'Standard VPS', subtitle: '14.99/mo', text: 'Instead of 29.99/mo', buttonLabel: 'Buy now' },
      { title: 'Pro VPS', subtitle: '19.99/mo', text: 'Instead of 39.99/mo', buttonLabel: 'Buy now' },
      { title: 'Business VPS', subtitle: '24.99/mo', text: 'Instead of 49.99/mo', buttonLabel: 'Buy now' },
      { title: 'Enterprise VPS', subtitle: '29.99/mo', text: 'Instead of 59.99/mo', buttonLabel: 'Buy now' },
      { title: 'Ultimate VPS', subtitle: '34.99/mo', text: 'Instead of 69.99/mo', buttonLabel: 'Buy now' },
      { title: 'Corporate VPS', subtitle: '39.99/mo', text: 'Instead of 79.99/mo', buttonLabel: 'Buy now' },
      { title: 'Supreme VPS', subtitle: '44.99/mo', text: 'Instead of 89.99/mo', buttonLabel: 'Buy now' },
    ],
  },
  {
    id: 'tab8',
    label: 'Free Hosting',
    cards: [
      { title: 'Free Basic', subtitle: '0.00/mo', text: 'Limited to 500MB storage', buttonLabel: 'Sign up' },
      { title: 'Free Standard', subtitle: '0.00/mo', text: 'Limited to 1GB storage', buttonLabel: 'Sign up' },
      { title: 'Free Pro', subtitle: '0.00/mo', text: 'Limited to 2GB storage', buttonLabel: 'Sign up' },
      { title: 'Free Business', subtitle: '0.00/mo', text: 'Limited to 3GB storage', buttonLabel: 'Sign up' },
      { title: 'Free Enterprise', subtitle: '0.00/mo', text: 'Limited to 4GB storage', buttonLabel: 'Sign up' },
      { title: 'Free Ultimate', subtitle: '0.00/mo', text: 'Limited to 5GB storage', buttonLabel: 'Sign up' },
      { title: 'Free Corporate', subtitle: '0.00/mo', text: 'Limited to 6GB storage', buttonLabel: 'Sign up' },
      { title: 'Free Supreme', subtitle: '0.00/mo', text: 'Limited to 7GB storage', buttonLabel: 'Sign up' },
    ],
  },
  
  
];

const App = () => {
  return (
    <div>
      <h1>My Tabs Component with Cards</h1>
      <Tabs>
        <TabList>
          {tabData.map(tab => (
            <Tab key={tab.id}>{tab.label}</Tab>
          ))}
        </TabList>

        {tabData.map(tab => (
          <TabPanel key={tab.id}>
            <div className="card-container">
              {tab.cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  text={card.text}
                  buttonLabel={card.buttonLabel}
                />
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default App;

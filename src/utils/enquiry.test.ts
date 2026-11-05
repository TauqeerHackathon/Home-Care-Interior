import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEnquiryForm, buildWhatsAppMessage, getWhatsAppUrl, VALID_SERVICES } from './enquiry';
import { BUSINESS_DATA } from '../data/businessData';

test('business data strictly preserves official facts', () => {
  assert.equal(BUSINESS_DATA.officialName, 'Home Care Interior');
  assert.equal(BUSINESS_DATA.ownerName, 'Yusuf Musir Khan');
  assert.equal(BUSINESS_DATA.established, 2002);
  assert.equal(BUSINESS_DATA.experience, 20);
  assert.equal(BUSINESS_DATA.projects, '100+');
  assert.equal(BUSINESS_DATA.primaryPhone, '+91 9823857050');
  assert.equal(BUSINESS_DATA.primaryEmail, 'homecareinterior111@gmail.com');
  assert.equal(BUSINESS_DATA.services.length, 7);
});

test('exactly 7 published services are defined', () => {
  const expectedServices = [
    'Building Construction',
    'Renovation',
    'Civil Work',
    'Interior Work',
    'Modular Kitchen',
    'False Ceiling',
    'Project Management',
  ];
  assert.deepEqual([...VALID_SERVICES].sort(), [...expectedServices].sort());
});

test('form validation catches missing or invalid fields', () => {
  const invalid = validateEnquiryForm({
    fullName: '',
    phone: '123',
    email: 'not-an-email',
    service: 'Fake Service' as any,
    projectLocation: '',
    projectDetails: 'short',
    consent: false,
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.service);
  assert.ok(invalid.errors.projectLocation);
  assert.ok(invalid.errors.projectDetails);
  assert.ok(invalid.errors.consent);
});

test('form validation passes with valid details', () => {
  const valid = validateEnquiryForm({
    fullName: 'Rahul Sharma',
    phone: '+91 9822123456',
    email: 'rahul@example.com',
    service: 'Interior Work',
    projectLocation: 'Kondhwa, Pune',
    projectDetails: 'Looking for full 3BHK flat interior execution and modular kitchen setup.',
    consent: true,
  });

  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('WhatsApp message builder formats required structure and encodes correctly', () => {
  const msg = buildWhatsAppMessage({
    fullName: 'Rahul Sharma',
    service: 'Modular Kitchen',
    projectLocation: 'Kondhwa, Pune',
    projectDetails: 'Need L-shaped kitchen setup.',
  });

  assert.match(msg, /Hello Home Care Interior/);
  assert.match(msg, /Name: Rahul Sharma/);
  assert.match(msg, /Required Service: Modular Kitchen/);
  assert.match(msg, /Project Location: Kondhwa, Pune/);
  assert.match(msg, /Project Details: Need L-shaped kitchen setup\./);

  const url = getWhatsAppUrl({
    fullName: 'Rahul Sharma',
    service: 'Modular Kitchen',
    projectLocation: 'Kondhwa, Pune',
    projectDetails: 'Need L-shaped kitchen setup.',
  });

  assert.ok(url.startsWith('https://wa.me/919823857050?text='));
  assert.ok(url.includes(encodeURIComponent('Rahul Sharma')));
});

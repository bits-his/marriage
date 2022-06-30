
import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Input, Label, Row, Button, FormGroup } from 'reactstrap'
import EditProfileSideBar from './EditProfileSideBar'
import states from "../states";
import localGoverment from "../localGoverment";

export default function EditProfile() {

    const _form = {
        stateProvince: "",
    }


    const [form, setForm] = useState(_form)
    const [data, useData] = useState([])
    const [LGAs, setLGAs] = useState([])

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    const [open1, setOpen1] = useState(false);
    const toggle1 = () => {
        setOpen1(!open1);
    };


    const handleChange = ({ target: { name, value } }) =>
        setForm((p) => ({ ...p, [name]: value }));


    return (
        <div>
            <Container>
                <Card>
                    <Row>
                        <CardBody>
                            <Row>
                                <h3>Edit Profile</h3>
                                <p>Answering these profile questions will help other users find you in search results and help us to find you <br>
                                </br>more accurate matches. Answer all questions below to complete this step.</p>

                                <h3>Your Basics</h3>
                                <hr />
                                <Col md={6}>
                                    <Label>First Name</Label>
                                    <Input type='text' />
                                </Col>
                                <Col md={6}></Col>
                                <Col md={6}>
                                    <Label>Date Of Birth:</Label>
                                    <Input type='date' />
                                </Col>
                                <Col md={2}>
                                    <Button className='mt-4'>Change</Button>
                                </Col>
                                <Col md={4}>
                                    * To protect your privacy we only store your month and year of birth
                                </Col>
                                <Col md={6}>
                                    <Label>I'm a:</Label>
                                    <Input type='text' />
                                </Col>
                                <Col md={3}>
                                    <Button className='mt-4'>Change</Button>
                                </Col>
                                <Col md={3}></Col>
                                {/* <Col md={4}>
                                    <Label>Country</Label>
                                    <Input type='select' />
                                </Col> */}
                                <Col md={6}>
                                    <Label>State/Province</Label>
                                    <Input type="select" name="stateProvince" value={form.stateProvince}
                                        onChange={({ target: { value } }) => {
                                            setForm(p => ({ ...p, stateProvince: value }))
                                            let selected = localGoverment.find(a => a.state === value)
                                            setLGAs(selected.lgas)
                                        }}>
                                        <option >Any State</option>
                                        {localGoverment.map(item => <option>{item.state}</option>)}

                                    </Input>
                                </Col>
                                <Col md={6}>
                                    <Label>City</Label>
                                    <Input type="select" name="city" value={form.city} onChange={handleChange}>
                                        <option>Any City</option>
                                        {LGAs.map(item => <option>{item}</option>)}
                                    </Input>
                                </Col>

                                <h3 className='mt-3'>Your Appearance</h3>
                                <hr />
                                <p>Hair color:</p>
                                <hr />
                                <Col md={3}>
                                    <Input type="radio" id="Bald / Shaved" name="fav_language" value="Bald / Shaved" />
                                    <Label for="Bald / Shaved">Bald / Shaved</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Black" name="fav_language" value="Black" />
                                    <Label for="Black">Black</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Blonde" name="fav_language" value="Blonde" />
                                    <Label for="Blonde">Blonde</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Brown" name="fav_language" value="Brown" />
                                    <Label for="Brown">Brown</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Grey / White" name="fav_language" value="Grey / White" />
                                    <Label for="Grey / White">Grey / White</Label>
                                </Col>

                                <Col md={3}>
                                    <Input type="radio" id="Light Brown" name="fav_language" value="Light Brown" />
                                    <Label for="Light Brown">Light Brown</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Red" name="fav_language" value="Red" />
                                    <Label for="Red">Red</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Changes frequently" name="fav_language" value="Changes frequently" />
                                    <Label for="Changes frequently">Changes frequently</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Other" name="fav_language" value="Other" />
                                    <Label for="Other">Other</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Prefer not to say" name="fav_language" value="Prefer not to say" />
                                    <Label for="Prefer not to say">Prefer not to say</Label>
                                </Col>

                                <p className='mt-3'>Eye color:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Green" name="fav_language" value="Green" />
                                    <Label for="Green">Green</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Black" name="fav_language" value="Black" />
                                    <Label for="Black">Black</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Blonde" name="fav_language" value="Blonde" />
                                    <Label for="Blonde">Blonde</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Brown" name="fav_language" value="Brown" />
                                    <Label for="Brown">Brown</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Grey / White" name="fav_language" value="Grey / White" />
                                    <Label for="Grey / White">Grey / White</Label>
                                </Col>

                                <Col md={3}>
                                    <Input type="radio" id="Light Brown" name="fav_language" value="Light Brown" />
                                    <Label for="Light Brown">Light Brown</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Red" name="fav_language" value="Red" />
                                    <Label for="Red">Red</Label>
                                </Col>

                                <p className='mt-3'>Height:</p>
                                <hr />
                                <Col md={4}>
                                    <Input type='select' />
                                </Col>
                                <Col md={7}></Col>

                                <p className='mt-3'>Weight:</p>
                                <hr />
                                <Col md={4}>
                                    <Input type='select' />
                                </Col>
                                <Col md={7}></Col>

                                <p className='mt-3'>Body type:</p>
                                <hr />
                                <Col md={3}>
                                    <Input type="radio" id="Petite" name="fav_language" value="Petite" />
                                    <Label for="Petite">Petite</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Slim" name="fav_language" value="Slim" />
                                    <Label for="Slim">Slim</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Athletic" name="fav_language" value="Athletic" />
                                    <Label for="Athletic">Athletic</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Average" name="fav_language" value="Average" />
                                    <Label for="Average">Average</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Few Extra Pounds" name="fav_language" value="Few Extra Pounds" />
                                    <Label for="Few Extra Pounds">Few Extra Pounds</Label>
                                </Col>

                                <Col md={3}>
                                    <Input type="radio" id="Full Figured" name="fav_language" value="Full Figured" />
                                    <Label for="Full Figured">Full Figured</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Large and Lovely" name="fav_language" value="Large and Lovely" />
                                    <Label for="Large and Lovely">Large and Lovely</Label>
                                </Col>

                                <p className='mt-3'>Your ethnicity is mostly:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Arab (Middle Eastern)" name="fav_language" value="Arab (Middle Eastern)" />
                                    <Label for="Arab (Middle Eastern)">Arab (Middle Eastern)</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Asian" name="fav_language" value="Asian" />
                                    <Label for="Asian">Asian</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Black" name="fav_language" value="Black" />
                                    <Label for="Black">Black</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Caucasian (White)" name="fav_language" value="Caucasian (White)" />
                                    <Label for="Caucasian (White)">Caucasian (White)</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Hispanic / Latino" name="fav_language" value="Hispanic / Latino" />
                                    <Label for="Hispanic / Latino">Hispanic / Latino</Label>
                                </Col>

                                <Col md={3}>
                                    <Input type="radio" id="Indian" name="fav_language" value="Indian" />
                                    <Label for="Indian">Indian</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Mixed" name="fav_language" value="Mixed" />
                                    <Label for="Mixed">Mixed</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Pacific Islander" name="fav_language" value="Pacific Islander" />
                                    <Label for="Pacific Islander">Pacific Islander</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Other" name="fav_language" value="Other" />
                                    <Label for="Other">Other</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Prefer not to say" name="fav_language" value="Prefer not to say" />
                                    <Label for="Prefer not to say">Prefer not to say</Label>
                                </Col>

                                <p className='mt-3'>I consider my appearance as:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Below average" name="fav_language" value="Below average" />
                                    <Label for="Below average">Below average</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Average" name="fav_language" value="Average" />
                                    <Label for="Average">Average</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Attractive" name="fav_language" value="Attractive" />
                                    <Label for="Attractive">Attractive</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Very attractive" name="fav_language" value="Very attractive" />
                                    <Label for="Very attractive">Very attractive</Label>
                                </Col>

                                <h3 className='mt-3'>Your Lifestyle</h3>
                                <hr />
                                <p className='mt-3'>Do you drink?</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Do drink" name="fav_language" value="Do drink" />
                                    <Label for="Do drink">Do drink</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Occasionally drink" name="fav_language" value="Occasionally drink" />
                                    <Label for="Occasionally drink">Occasionally drink</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Don't drink" name="fav_language" value="Don't drink" />
                                    <Label for="Don't drink">Don't drink</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Prefer not to say" name="fav_language" value="Prefer not to say" />
                                    <Label for="Prefer not to say">Prefer not to say</Label>
                                </Col>

                                <p className='mt-3'>Do you drink?</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Do smoke" name="fav_language" value="Do smoke" />
                                    <Label for="Do smoke">Do smoke</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Occasionally smoke" name="fav_language" value="Occasionally smoke" />
                                    <Label for="Occasionally smoke">Occasionally smoke</Label>
                                </Col>
                                <Col md={2}>
                                    <Input type="radio" id="Don't smoke" name="fav_language" value="Don't smoke" />
                                    <Label for="Don't smoke">Don't smoke</Label>
                                </Col>

                                <p className='mt-3'>Eating Habits:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Halal foods always" name="fav_language" value="Halal foods always" />
                                    <Label for="Halal foods always">Halal foods always</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Halal foods when I can" name="fav_language" value="Halal foods when I can" />
                                    <Label for="Halal foods when I can">Halal foods when I can</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="No special restrictions" name="fav_language" value="No special restrictions" />
                                    <Label for="No special restrictions">No special restrictions</Label>
                                </Col>

                                <p className='mt-3'>Marital Status:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Single" name="fav_language" value="Single" />
                                    <Label for="Single">Single</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Separated" name="fav_language" value="Separated" />
                                    <Label for="Separated">Separated</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Widowed" name="fav_language" value="Widowed" />
                                    <Label for="Widowed">Widowed</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Divorced" name="fav_language" value="Divorced" />
                                    <Label for="Divorced">Divorced</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Other" name="fav_language" value="Other" />
                                    <Label for="Other">Other</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Prefer not to say" name="fav_language" value="Prefer not to say" />
                                    <Label for="Prefer not to say">Prefer not to say</Label>
                                </Col>

                                <p className='mt-3'>Do you have children?</p>
                                <hr />

                                <Col md={4}>
                                    <Input type='select'>
                                        <option>Please Select...</option>
                                        <option>No</option>
                                        <option>Yes-don't live at home</option>
                                        <option>Yes-sometimes live at home</option>
                                        <option>Yes-live at home</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label>Number of children:</Label>
                                    <Input type='select'>
                                        <option>Please Select...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>More than 8</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label>Oldest child:</Label>
                                    <Input type='select'>
                                        <option>Please Select...</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>Older then 18</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label>Youngest child:</Label>
                                    <Input type='select'>
                                        <option>Please Select...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>Older then 18</option>
                                    </Input>
                                </Col>



                                <p className='mt-3'>Do you want (more) children?</p>
                                <hr />

                                <Col md={4}>
                                    <Input type="select" >
                                        <option>Please Select...</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                        <option>Not Sure</option>
                                    </Input>
                                </Col>
                                <p className='mt-3'>Occupation:</p>
                                <hr />
                                <Col md={4}>
                                    <Input type='select' >
                                        <option>Please Select...</option>
                                        <option>Administrative / Secretarial / Clerical </option>
                                        <option>Advertising / Media</option>
                                        <option>Artistic / Creative / Performance</option>
                                        <option>Construction / Trades</option>
                                        <option>Domestic Helper</option>
                                        <option>Education / Academic</option>
                                        <option>Entertainment / Media</option>
                                        <option>Executive / Management / HR</option>
                                        <option>Farming / Agriculture</option>
                                        <option>Finance / Banking / Real Estate</option>
                                        <option>Fire / law enforcement / security</option>
                                        <option>Hair Dresser / Personal Grooming</option>
                                        <option>IT / Communications</option>
                                        <option>Laborer / Manufacturing</option>
                                        <option>Legal</option>
                                        <option>Medical / Dental / Veterinary</option>
                                        <option>Military</option>
                                        <option>Nanny / Child care</option>
                                        <option>No occupation / Stay at home</option>
                                        <option>Non-profit / clergy / social services</option>
                                        <option>Political / Govt / Civil Service</option>
                                        <option>Retail / Food services</option>
                                        <option>Retired</option>
                                        <option>Sales / Marketing</option>
                                        <option>Self Employed</option>
                                        <option>Sports / recreation</option>
                                        <option>Student</option>
                                        <option>Technical / Science / Engineering</option>
                                        <option>Transportation</option>
                                        <option>Travel / Hospitality</option>
                                        <option>Unemployed</option>
                                        <option>Other</option>


                                    </Input>
                                </Col>
                                <p className='mt-3'>Employment status:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Student" name="fav_language" value="Student" />
                                    <Label for="Student">Student</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Part Time" name="fav_language" value="Part Time" />
                                    <Label for="Part Time">Part Time</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Full Time" name="fav_language" value="Full Time" />
                                    <Label for="Full Time">Full Time</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Homemaker" name="fav_language" value="Homemaker" />
                                    <Label for="Homemaker">Homemaker</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Retired" name="fav_language" value="Retired" />
                                    <Label for="Retired">Retired</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Not Employed" name="fav_language" value="Not Employed" />
                                    <Label for="Not Employed">Not Employed</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Other" name="fav_language" value="Other" />
                                    <Label for="Other">Other</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Prefer not to say" name="fav_language" value="Prefer not to say" />
                                    <Label for="Prefer not to say">Prefer not to say</Label>
                                </Col>

                                <p className='mt-3'>Annual Income:</p>
                                <hr />

                                <Col md={4}>
                                    <Input type='select' placeholder='Please Select...'></Input>
                                </Col>
                                <Col md={7}></Col>
                                <Col md={4}>
                                    <Label>change currency</Label>
                                    <Input type='select'></Input>
                                </Col>
                                <Col md={7}></Col>

                                <p className='mt-3'>Living situation:</p>
                                <hr />


                                <Col md={3}>
                                    <Input type="radio" id="Live Alone" name="fav_language" value="Live Alone" />
                                    <Label for="Live Alone">Live Alone</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Live with friends" name="fav_language" value="Live with friends" />
                                    <Label for="Live with friends">Live with friends</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Live with family" name="fav_language" value="Live with family" />
                                    <Label for="Live with family">Live with family</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Live with kids" name="fav_language" value="Live with kids" />
                                    <Label for="Live with kids">Live with kids</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Live with spouse" name="fav_language" value="Live with spouse" />
                                    <Label for="Live with spouse">Live with spouse</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Other" name="fav_language" value="Other" />
                                    <Label for="Other">Other</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Prefer not to say" name="fav_language" value="Prefer not to say" />
                                    <Label for="Prefer not to say">Prefer not to say</Label>
                                </Col>

                                <p className='mt-3'>Willing to relocate:</p>
                                <hr />

                                <Col md={4}>
                                    <Input type="radio" id="Willing to relocate within my country" name="fav_language" value="Willing to relocate within my country" />
                                    <Label for="Willing to relocate within my country">Willing to relocate within my country</Label>
                                </Col>
                                <Col md={4}>
                                    <Input type="radio" id="Willing to relocate to another country" name="fav_language" value="Willing to relocate to another country" />
                                    <Label for="Willing to relocate to another country">Willing to relocate to another country</Label>
                                </Col>
                                <Col md={4}>
                                    <Input type="radio" id="Not willing to relocate" name="fav_language" value="Not willing to relocate" />
                                    <Label for="Not willing to relocate">Not willing to relocate</Label>
                                </Col>

                                <p className='mt-3'>Relationship you're looking for:</p>
                                <hr />
                                <Col md={3}>
                                    <Input type="checkbox" id="Marriage" name="fav_language" value="Marriage" />
                                    <Label for="Marriage">Marriage</Label>
                                </Col>

                                <Col md={3}>
                                    <Input type="checkbox" id="Friendship" name="fav_language" value="Friendship" />
                                    <Label for="Friendship">Friendship</Label>
                                </Col>
                                <Col md={6}></Col>

                                <h3 className='mt-3'>Your Background / Cultural Values</h3>
                                <hr />

                                <p className='mt-3'>Your Background / Cultural Values</p>
                                <hr />
                                <Col md={4}>
                                    <Input type='select' ></Input>
                                </Col>
                                <Col md={7}></Col>

                                <p className='mt-3'>Education:</p>
                                <hr />


                                <Col md={3}>
                                    <Input type="radio" id="Primary (Elementary) School" name="fav_language" value="Primary (Elementary) School" />
                                    <Label for="Primary (Elementary) School">Primary (Elementary) School</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Middle School / Junior High" name="fav_language" value="Middle School / Junior High" />
                                    <Label for="Middle School / Junior High">Middle School / Junior High</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="High School" name="fav_language" value="High School" />
                                    <Label for="High School">High School</Label>
                                </Col>

                                <Col md={3}>
                                    <Input type="radio" id="Vocational College" name="fav_language" value="Vocational College" />
                                    <Label for="Vocational College">Vocational College</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Bachelors Degree" name="fav_language" value="Bachelors Degree" />
                                    <Label for="Bachelors Degree">Bachelors Degree</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Masters Degree" name="fav_language" value="Masters Degree" />
                                    <Label for="Masters Degree">Masters Degree</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="PhD or Doctorate" name="fav_language" value="PhD or Doctorate" />
                                    <Label for="PhD or Doctorate">PhD or Doctorate</Label>
                                </Col>

                                <p className='mt-3'>Languages spoken:</p>
                                <hr />

                                <Col md={4}>
                                    <Input type='select' >
                                        <option>Please Select..</option>
                                        <option>English</option>
                                        <option>Hausa</option>
                                        <option>Arabic</option>
                                        <option>Other</option>

                                    </Input>
                                </Col>
                                <Col md={7}>* use Ctrl key for multiple selections</Col>

                                <p className='mt-3'>Religion:</p>
                                <hr />


                                <Col md={4}>
                                    <Input type='select' ></Input>
                                </Col>
                                <Col md={7}></Col>

                                <p className='mt-3'>Born / Reverted:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Born a muslim" name="fav_language" value="Born a muslim" />
                                    <Label for="Born a muslim">Born a muslim</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Reverted to Islam" name="fav_language" value="Reverted to Islam" />
                                    <Label for="Reverted to Islam">Reverted to Islam</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Plan to revert to Islam" name="fav_language" value="Plan to revert to Islam" />
                                    <Label for="Plan to revert to Islam">Plan to revert to Islam</Label>
                                </Col>

                                <p className='mt-3'>Religious values:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Very Religious" name="fav_language" value="Very Religious" />
                                    <Label for="Very Religious">Very Religious</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Religious" name="fav_language" value="Religious" />
                                    <Label for="Religious">Religious</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Not Religious" name="fav_language" value="Not Religious" />
                                    <Label for="Not Religious">Not Religious</Label>
                                </Col>

                                <p className='mt-3'>Attend religious services:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Daily" name="fav_language" value="Daily" />
                                    <Label for="Daily">Daily</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Only on Jummah / Fridays" name="fav_language" value="Only on Jummah / Fridays" />
                                    <Label for="Only on Jummah / Fridays">Only on Jummah / Fridays</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Sometimes" name="fav_language" value="Sometimes" />
                                    <Label for="Sometimes">Sometimes</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Only During Ramadan" name="fav_language" value="Only During Ramadan" />
                                    <Label for="Only During Ramadan">Only During Ramadan</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Never" name="fav_language" value="Never" />
                                    <Label for="Never">Never</Label>
                                </Col>

                                <p className='mt-3'>Read Qur'an:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="select" >
                                        <option>Please Select...</option>
                                        <option>Daily</option>
                                        <option>Ocassionally</option>
                                        <option>Only During Ramadan</option>
                                        <option>Only on Jummah / Fridays</option>
                                        <option>Read translated version</option>
                                        <option>Never Read</option>
                                        <option>Prefer not to say</option>

                                    </Input>
                                </Col>

                                <p className='mt-3'>Polygamy:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Accept polygamy" name="fav_language" value="Accept polygamy" />
                                    <Label for="Accept polygamy">Accept polygamy</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Maybe accept polygamy" name="fav_language" value="Maybe accept polygamy" />
                                    <Label for="Maybe accept polygamy">Maybe accept polygamy</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Don't accept polygamy" name="fav_language" value="Don't accept polygamy" />
                                    <Label for="Don't accept polygamy">Don't accept polygamy</Label>
                                </Col>

                                <p className='mt-3'>Family values:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Conservative" name="fav_language" value="Conservative" />
                                    <Label for="Conservative">Conservative</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Moderate" name="fav_language" value="Moderate" />
                                    <Label for="Moderate">Moderate</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Liberal" name="fav_language" value="Liberal" />
                                    <Label for="Liberal">Liberal</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Prefer not to say" name="fav_language" value="Prefer not to say" />
                                    <Label for="Prefer not to say">Prefer not to say</Label>
                                </Col>

                                <p className='mt-3'>Profile creator:</p>
                                <hr />

                                <Col md={3}>
                                    <Input type="radio" id="Self" name="fav_language" value="Self" />
                                    <Label for="Self">Self</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Parent" name="fav_language" value="Parent" />
                                    <Label for="Parent">Parent</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Friend" name="fav_language" value="Friend" />
                                    <Label for="Friend">Friend</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Brother / Sister" name="fav_language" value="Brother / Sister" />
                                    <Label for="Brother / Sister">Brother / Sister</Label>
                                </Col>
                                <Col md={3}>
                                    <Input type="radio" id="Relative" name="fav_language" value="Relative" />
                                    <Label for="Relative">Relative</Label>
                                </Col>

                                <h3 className='mt-3'>In your own words</h3>
                                <hr />
                                <Col md={4}>
                                    <Label>Your profile heading:</Label>
                                    <Input type='text' />
                                </Col>
                                <Col md={4}>
                                    <Label>A little about yourself:</Label>
                                    <Input type='text' />
                                </Col>
                                <Col md={4}>
                                    <Label>What you're looking for in a partner:</Label>
                                    <Input type='text' />
                                </Col>
                                <center><Button className='mt-3' style={{ width: "10rem" }}>Submit</Button></center>
                            </Row>
                        </CardBody>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

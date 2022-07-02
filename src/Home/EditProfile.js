
import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Input, Label, Row, Button } from 'reactstrap'
// import EditProfileSideBar from './EditProfileSideBar'
// import states from "../states";
import localGoverment from "../localGoverment";

export default function EditProfile() {
//njjjjjjjjjj
    const _form = {
        fist_name: "",
        date_of_birth: "",
        im_a: "",
        state_province: "",
        city: "",
        hair_color: "",
        eye_color: "",
        height: "",
        weight: "",
        body_type: "",
        Your_ethnicity_is_mostly: "",
        I_consider_my_appearance_as: "",
        do_you_drink: "",
        do_you_smoke: "",
        eating_habbit: "",
        marital_status: "",
        Do_you_have_children: "",
        number_of_children: "",
        oldest_child: "",
        Do_you_want_more_children: "",
        occupation: "",
        employement_status: "",
        annual_income: "",
        living_situation: "",
        willing_to_relocate: "",
        relationship_you_are_looking_for: "",
        your_background: "",
        education: "",
        language_spoken: "",
        religion: "",
        born_reverted: "",
        religious_value: "",
        attend_religious_service: "",
        read_Qur_an: "",
        polygamy: "",
        family_value: "",
        profile_creator: "",
        your_profile_heading: "",
        a_little_about_yourself: "",
        what_you_are_looking_for_in_a_partner: ""
    }

    const [form, setForm] = useState(_form)
    // const [data, setData] = useState([])
    const [LGAs, setLGAs] = useState([])


    const handleAdd = () => {
        fetch("http://localhost:34567/api/edit_pro_file", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                form
            )})
        .then((raw) => raw.json())
        .then((response) => console.log(response))
        .catch((err) => console.log(err))

        setForm(_form)
    }

    // const [open, setOpen] = useState(false);
    // // const toggle = () => {
    //     setOpen(!open);
    // };
    // const [open1, setOpen1] = useState(false);
    // const toggle1 = () => {
    //     setOpen1(!open1);
    // };


    const handleChange = ({ target: { name, value } }) =>
        setForm((p) => ({ ...p, [name]: value }));


    return (
        <div>
            <Container>
                <Card className='mt-3 p-3'>
                    <Row >
                        <CardBody>
                            <Row>
                                <h3>Edit Profile</h3>
                                <p>Answering these profile questions will help other users find you in search results and help us to find you <br>
                                </br>more accurate matches. Answer all questions below to complete this step.</p>

                                <h3>Your Basics</h3>
                                <hr />
                                <Col md={6}>
                                    <Label className='edit-pro-label'>First Name</Label>
                                    <Input type='text' 
                                    name='fist_name' value={form.fist_name}
                                    onChange={handleChange}
                                    />
                                </Col>
                                <Col md={6}></Col>
                                <Col md={6}>
                                    <Label className='edit-pro-label'>Date Of Birth:</Label>
                                    <Input type='date' 
                                    name='date_of_birth' value={form.date_of_birth}
                                    onChange={handleChange}
                                    />
                                </Col>
                                <Col md={2}>
                                    <Button className='mt-4'>Change</Button>
                                </Col>
                                <Col md={4}>
                                    * To protect your privacy we only store your month and year of birth
                                </Col>
                                <Col md={6}>
                                    <Label className='edit-pro-label'>I'm a:</Label>
                                    <Input type='text' 
                                    name='im_a' value={form.im_a}
                                    onChange={handleChange}
                                    />
                                </Col>
                                <Col md={3}>
                                    <Button className='mt-4'>Change</Button>
                                </Col>
                                <Col md={3}></Col>
                                {/* <Col md={4}>
                                    <Label className='edit-pro-label'>Country</Label>
                                    <Input type='select' />
                                </Col> */}
                                <Col md={6}>
                                    <Label className='edit-pro-label'>State/Province</Label>
                                    <Input type="select" name="state_province" value={form.state_province}
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
                                    <Label className='edit-pro-label'>City</Label>
                                    <Input type="select" name="city" value={form.city} onChange={handleChange}
                                    >
                                        <option>Any City</option>
                                        {LGAs.map(item => <option>{item}</option>)}
                                    </Input>
                                </Col>

                                <h3 className='mt-3'>Your Appearance</h3>
                                <hr />
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Hair color:</Label>
                                    <Input type="select" 
                                    name='hair_color' value={form.hair_color}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Bald / Shaved</option>
                                        <option>Black</option>
                                        <option>Blonde</option>
                                        <option>Brown</option>
                                        <option>Grey / White</option>
                                        <option>Light Brown</option>
                                        <option>Red</option>
                                        <option>Changes frequently</option>
                                        <option>Other</option>
                                        <option>Prefer not to say</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Eye color:</Label>
                                    <Input type="select" 
                                    name='eye_color' value={form.eye_color}
                                    onChange={handleChange}
                                    >
                                         <option>Please Select...</option>
                                        <option>Black</option>
                                        <option>Blue</option>
                                        <option>Brown</option>
                                        <option>Green</option>
                                        <option>Grey</option>
                                        <option>Hazel</option>
                                        <option>Other</option>
                                        <option></option>

                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Height:</Label>
                                    <Input type='select'
                                    name='height' value={form.height}
                                    onChange={handleChange}
                                    >
                                    <option>Please Select...</option>
                                    <option>4'7"(140 cm)</option>
                                    <option>4'8"(143 cm)</option>
                                    <option>4'9"(145 cm)</option>
                                    <option>5'(148 cm)</option>
                                    <option>5'1"(153 cm)</option>
                                    <option>5'2"(155 cm)</option>
                                    <option>5'3"(158 cm)</option>
                                    <option>5'4"(161 cm)</option>
                                    <option>5'5"(163 cm)</option>
                                    <option>5'6"(166 cm)</option>
                                    <option>5'7"(168 cm)</option>
                                    <option>5'8"(171 cm)</option>
                                    <option>5'9"(173 cm)</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Weight:</Label>
                                    <Input type='select' 
                                    name='weight' value={form.weight}
                                    onChange={handleChange}
                                    >
                                    <option>Please Select...</option>
                                    <option>40 kg(140 Ib)</option>
                                    <option>41 kg(143 Ib)</option>
                                    <option>42 kg(145 Ib)</option>
                                    <option>43 kg(148 Ib)</option>
                                    <option>45 kg(153 Ib)</option>
                                    <option>46 kg(155 Ib)</option>
                                    <option>47 kg(158 Ib)</option>
                                    <option>48 kg(161 Ib)</option>
                                    <option>49 kg(163 Ib)</option>
                                    <option>50 kg(166 Ib)</option>
                                    <option>51 kg(168 Ib)</option>
                                    <option>52 kg(171 Ib)</option>
                                    <option>53 kg(173 Ib)</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Body type:</Label>
                                    <Input type="select" 
                                    name='body_type' value={form.body_type}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Petite</option>
                                        <option>Slim</option>
                                        <option>Athletic</option>
                                        <option>Average</option>
                                        <option>Few Extra Pounds</option>
                                        <option>Full Figured</option>
                                        <option>Large and Lovely</option>

                                    </Input>
                                </Col>



                                <Col md={4}>
                                    <Label className='edit-pro-label'>Your ethnicity is mostly:</Label>
                                    <Input type="select" 
                                    name='Your_ethnicity_is_mostly' value={form.Your_ethnicity_is_mostly}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Arab (Middle Eastern)</option>
                                        <option>Asian</option>
                                        <option>Black</option>
                                        <option>Caucasian (White)</option>
                                        <option>Hispanic / Latino</option>
                                        <option>Indian</option>
                                        <option>Mixed</option>
                                        <option>Pacific Islander</option>
                                        <option>Other</option>
                                        <option>Other</option>

                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>I consider my appearance as:</Label>
                                    <Input type="select" 
                                    name='I_consider_my_appearance_as' value={form.I_consider_my_appearance_as}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Below average</option>
                                        <option>Average</option>
                                        <option>Attractive</option>
                                        <option>Very attractive</option>

                                    </Input>
                                </Col>
                                <h3 className='mt-3'>Your Lifestyle</h3>

                                <Label className='edit-pro-label'>Do you drink?</Label>
                                <Col md={4}>
                                    <Input type="select"  
                                    name='do_you_drink' value={form.do_you_drink}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Do drink</option>
                                        <option>Occasionally drink</option>
                                        <option>Don't drink</option>
                                        <option>Prefer not to say</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Do you drink?</Label>
                                    <Input type="select"
                                    name='do_you_smoke' value={form.do_you_smoke}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Do smoke</option>
                                        <option>Occasionally smoke</option>
                                        <option>Don't smoke</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Eating Habits:</Label>
                                    <Input type="select" 
                                    name='eating_habbit' value={form.eating_habbit}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Halal foods always</option>
                                        <option>Halal foods when I can</option>
                                        <option>No special restrictions</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Marital Status:</Label>
                                    <Input type="select" 
                                    name='marital_status' value={form.marital_status}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Single</option>
                                        <option>Separated</option>
                                        <option>Widowed</option>
                                        <option>Divorced</option>
                                        <option>Other</option>
                                        <option>Prefer not to say</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Do you have children?</Label>
                                    <Input type='select'
                                    name='Do_you_have_children' value={form.Do_you_have_children}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>No</option>
                                        <option>Yes-don't live at home</option>
                                        <option>Yes-sometimes live at home</option>
                                        <option>Yes-live at home</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Number of children:</Label>
                                    <Input type='select'
                                    name='number_of_children' value={form.number_of_children}
                                    onChange={handleChange}
                                    >
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
                                    <Label className='edit-pro-label'>Oldest child:</Label>
                                    <Input type='select'
                                    name='oldest_child' value={form.oldest_child}
                                    onChange={handleChange}
                                    >
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
                                    <Label className='edit-pro-label'>Youngest child:</Label>
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

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Do you want (more) children?</Label>
                                    <Input type="select" 
                                    name='Do_you_want_more_children' value={form.Do_you_want_more_children}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                        <option>Not Sure</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Occupation:</Label>
                                    <Input type='select' 
                                    name='occupation' value={form.occupation}
                                    onChange={handleChange}
                                    >
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


                                <Col md={4}>
                                    <Label className='edit-pro-label'>Employment status:</Label>
                                    <Input type="select" 
                                    name='employement_status' value={form.employement_status}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Student</option>
                                        <option>Part Time</option>
                                        <option>Full Time</option>
                                        <option>Homemaker</option>
                                        <option>Retired</option>
                                        <option>Not Employed</option>
                                        <option>Other</option>
                                        <option>Prefer not to say</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Annual Income:</Label>
                                    <Input type='select' 
                                    name='annual_income' value={form.annual_income}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>change currency</Label>
                                    <Input type='select'>
                                        <option>Please Select...</option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </Input>
                                </Col>


                                <Col md={4}>
                                    <Label className='edit-pro-label'>Living situation:</Label>
                                    <Input type="select" 
                                    name='living_situation' value={form.living_situation}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Live Alone</option>
                                        <option>Live with friends</option>
                                        <option>Live with family</option>
                                        <option>Live with kids</option>
                                        <option>Live with spouse</option>
                                        <option>Other</option>
                                        <option>Prefer not to say</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Willing to relocate:</Label>
                                    <Input type="select"
                                    name='willing_to_relocate' value={form.willing_to_relocate}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Willing to relocate within my country</option>
                                        <option>Willing to relocate to another country</option>
                                        <option>Not willing to relocate</option>
                                        <option>Not sure about relocating</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Relationship you're looking for:</Label>
                                    <Input type="select" 
                                    name='relationship_you_are_looking_for' value={form.relationship_you_are_looking_for}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Marriage</option>
                                        <option>Friendship</option>
                                    </Input>
                                </Col>



                                <h3 className='mt-3'>Your Background / Cultural Values</h3>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Education:</Label>
                                    <Input type='select' 
                                    name='education' value={form.education}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Primary (Elementary) School</option>
                                        <option>Middle School / Junior High</option>
                                        <option>High School</option>
                                        <option>Vocational College</option>
                                        <option>Bachelors Degree</option>
                                        <option>Masters Degree</option>
                                        <option>PhD or Doctorate</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Languages spoken:</Label>
                                    <Input type='select' 
                                    name='language_spoken' value={form.language_spoken}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Please Select..</option>
                                        <option>English</option>
                                        <option>Hausa</option>
                                        <option>Arabic</option>
                                        <option>Other</option>

                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Religion:</Label>
                                    <Input type='select'
                                    name='religion' value={form.religion}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Islam Sunna</option>
                                        <option>Islam Shiite</option>
                                        <option>Islam Sufism</option>
                                        <option>Islam Ahmadiyya</option>
                                        <option>Islam Other</option>
                                        <option>Willing to revert</option>
                                        <option>Other</option>
                                        <option>Frefer not to say</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Born / Reverted:</Label>
                                    <Input type="select" 
                                    name='born_reverted' value={form.born_reverted}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Born a muslim</option>
                                        <option>Reverted to Islam</option>
                                        <option>Plan to revert to Islam</option>
                                    </Input>
                                </Col>


                                <Col md={4}>
                                    <Label className='edit-pro-label'>Religious values:</Label>
                                    <Input type="select"
                                    name='religious_value' value={form.religious_value}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Very Religious</option>
                                        <option>Religious</option>
                                        <option>Not Religious</option>
                                    </Input>

                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Attend religious services:</Label>
                                    <Input type="select" 
                                    name='attend_religious_service' value={form.attend_religious_service}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Daily</option>
                                        <option>Only on Jummah / Fridays</option>
                                        <option>Sometimes</option>
                                        <option>Only During Ramadan</option>
                                        <option>Never</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Read Qur'an:</Label>
                                    <Input type="select" 
                                    name='read_Qur_an' value={form.read_Qur_an}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
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
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Polygamy:</Label>
                                    <Input type="select" 
                                    name='polygamy' value={form.polygamy}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Accept polygamy</option>
                                        <option>Maybe accept polygamy</option>
                                        <option>Don't accept polygam</option>
                                    </Input>
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Family values:</Label>
                                    <Input type="select" 
                                    name='family_value' value={form.family_value}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Conservative</option>
                                        <option>Moderate</option>
                                        <option>Liberal</option>
                                        <option>Prefer not to say</option>
                                    </Input>
                                </Col>

                                <Col md={4}>
                                    <Label className='edit-pro-label'>Profile creator:</Label>
                                    <Input type="select" 
                                    name='profile_creator' value={form.profile_creator}
                                    onChange={handleChange}
                                    >
                                        <option>Please Select...</option>
                                        <option>Self</option>
                                        <option>Parent</option>
                                        <option>Friend</option>
                                        <option>Brother / Sister</option>
                                        <option>Relative</option>
                                    </Input>
                                </Col>
                                <h3 className='mt-3'>In your own words</h3>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>Your profile heading:</Label>
                                    <Input type='text' 
                                    name='your_profile_heading' value={form.your_profile_heading}
                                    onChange={handleChange}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>A little about yourself:</Label>
                                    <Input type='text' 
                                    name='a_little_about_yourself' value={form.a_little_about_yourself}
                                    onChange={handleChange}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Label className='edit-pro-label'>What you're looking for in a partner:</Label>
                                    <Input type='text' 
                                    name='what_you_are_looking_for_in_a_partner' value={form.what_you_are_looking_for_in_a_partner}
                                    onChange={handleChange}
                                   />
                                </Col>
                                <center><Button className='mt-3' style={{ width: "10rem" }}
                                onClick={handleAdd}
                                >Submit</Button></center>
                            </Row>
                        </CardBody>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

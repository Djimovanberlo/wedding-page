import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'

import { db, GUEST_COLLECTION } from '../../firebase/config'
import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'
import { FieldArray, Form, Formik } from 'formik'
import { FormCheckBoxField, FormRadioField, FormTextField } from '../../components/form'
import { Button } from '../../components/buttons'
import { H2, P } from '../../components/typography'
import FlexSection from '../../components/flex-section'

const Rsvp = () => {
  const { theme } = useThemeContext()
  const [rerender, setRerender] = useState(false)
  const formInitGuestObj = { guestName: '', isPresent: false, isChild: false, isVegetarian: false }
  const formInitValues = { guests: [{ ...formInitGuestObj }] }

  const addGuests = values => {
    const nameArr = values.guests.map(guest => guest.guestName)
    if (nameArr.some(guestName => !guestName)) return

    values.guests.forEach(guest => {
      const { guestName, isPresent, isChild, isVegetarian } = guest
      setDoc(doc(db, GUEST_COLLECTION, guestName), {
        guestName,
        isPresent: JSON.parse(isPresent),
        isChild,
        isVegetarian,
      }).then(() => {
        setRerender(!rerender)
        localStorage.setItem('form_submitted', JSON.stringify(true))
      })
    })
  }

  const formIsSubmitted = JSON.parse(localStorage.getItem('form_submitted')) ?? null

  return (
    <>
      <Banner src={`/${theme}/banners/rsvp.jpg`} />
      <Wrapper>
        <FlexSection image={`/${theme}/icons/rsvp_1.svg`}>
          {!formIsSubmitted ? (
            <Formik initialValues={formInitValues} onSubmit={addGuests}>
              {({ values, _, __, handleReset }) => (
                <Form>
                  <FieldArray name='guests'>
                    {({ _, remove, push }) => (
                      <>
                        {values.guests.map((_, index) => (
                          <div key={index}>
                            <FormTextField name={`guests.${index}.guestName`} placeholder='name' />
                            <P>Aanwezig</P>
                            <FormRadioField name={`guests.${index}.isPresent`} value='true' labelText='Ja' />
                            <FormRadioField name={`guests.${index}.isPresent`} value='false' labelText='Nee' />
                            <br />
                            <FormCheckBoxField name={`guests.${index}.isChild`} labelText='kinderportie' /> <br />
                            <FormCheckBoxField name={`guests.${index}.isVegetarian`} labelText='vega aub' /> <br />
                            {values.guests.length > 1 && (
                              <Button type='button' onClick={() => remove(index)}>
                                <P>Remove guest</P>
                              </Button>
                            )}
                          </div>
                        ))}
                        {values.guests.length < 5 && (
                          <Button type='button' onClick={() => push({ ...formInitGuestObj })}>
                            <P>Add guest</P>
                          </Button>
                        )}
                      </>
                    )}
                  </FieldArray>
                  <Button
                    onClick={evt => {
                      evt.preventDefault()
                      handleReset()
                    }}>
                    <P>RESET</P>
                  </Button>
                  <Button type='submit'>
                    <P>ADD DATA</P>
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <H2>Form is submitted, contact us for more info</H2>
          )}
        </FlexSection>
      </Wrapper>
    </>
  )
}

export default Rsvp

import React, {Text} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <div className='login-form'>
      
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }

    `}</style>


    <Grid
      textAlign='center'
      class="landing-image"
      style={{ height: '100%', backgroundImage: 'url(/resources/images/background_login.jpg)' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>

        <Header as='h2' color='green' textAlign='center'>
        <strong >Face</strong>Farm
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Endereço de e-mail'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Senha'
              type='password'
            />

            <Button color='green' fluid size='large'>Entrar</Button>
          </Segment>
        </Form>
        <Message>
          Novo por aqui? <a href='#'>Abra uma conta</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm
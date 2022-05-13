import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormHelperText,
  Link,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl
} from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';
import axios from 'axios'
import toast from 'react-hot-toast';

export const FirebaseRegister = (props) => {
  const isMounted = useMounted();
  const router = useRouter();
  const { createUserWithEmailAndPassword, signInWithGoogle } = useAuth();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      policy: true,
      role: '',
      submit: null
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .max(255)
        .required('name is required'),
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .min(7)
        .max(255)
        .required('Password is required'),
      role: Yup
        .string()
        .required('Role is required'),
      policy: Yup
        .boolean()
        .oneOf([true], 'This field must be checked'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log("1");
        const a = await createUserWithEmailAndPassword(values.email, values.password);
        console.log(a);
        console.log("2");

        try {
          if (isMounted()) {     
            const {data} = await axios.get(`/api/owner/${values.email}`)
            .catch(error => console.log(error));
            await axios.put(`/api/user/${data.data._id}`, {
              name: values.name,
              role: values.role
            })
            .catch(error => console.log(error));

            localStorage.setItem("lab-user", data.data.id);
            localStorage.setItem("is-owner", "true"); 
            const project_list = data.data.projects.map(project => ({
              id: project._id,
              title : project.title,
              path : `/workspace?id=${project._id}`
            }))
            localStorage.setItem('project_list', JSON.stringify(project_list));
            
            const returnUrl = router.query.returnUrl || '/dashboard/projects';
            router.push(returnUrl);
          }
        } catch (err) {
          const {data} = await axios.post("/api/user", {
                name: values.name,
                email: values.email,
                role: values.role
              })
              .catch(error => console.log(error));

              localStorage.setItem("lab-user", data.data.id);
              localStorage.setItem("is-owner", "true"); 
              const project_list = data.data.projects.map(project => ({
                id: project._id,
                title : project.title,
                path : `/workspace?id=${project._id}`
              }))
              localStorage.setItem('project_list', JSON.stringify(project_list));
              
              const returnUrl = router.query.returnUrl || '/dashboard/projects';
              router.push(returnUrl);
        } finally {
            const user_id = localStorage.getItem("lab-user");
            const limnu_userCreate = await axios.post("https://api.apix.limnu.com/v1/userCreate", {
              apiKey: 'K_zZbXKpBQT6dp4DvHcClqQxq2sDkiRO',
              displayName: values.name
            })
            .catch(error => console.log(error));
            localStorage.setItem('limnu_token', limnu_userCreate.data.token)

            await axios.put(`/api/user/${user_id}`, {
              limnu_userId: limnu_userCreate.data.userId,
              limnu_token: limnu_userCreate.data.token
            })
            .catch(error => console.log(error)); 

            await axios.post("/api/emails/welcome_email", {
              name: values.name,
              email: values.email
            })
            .catch(error => console.log(error));
        }
      } catch (err) {
        console.error(err);
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    }
  });

  const handleGoogleClick = async () => {
    try {
      const googleSignup = await signInWithGoogle();

      if (googleSignup.additionalUserInfo.isNewUser) {          
        const {data} = await axios.post("/api/user", {
          name: googleSignup.user.displayName,
          email: googleSignup.user.email
        })
        .catch(error => console.log(error));
        localStorage.setItem("lab-user", data.data.id);

        const returnUrl = router.query.returnUrl || '/dashboard/projects';
        router.push(returnUrl);
      }
      else {
        toast.error('User already have an account!');
      }
    } catch (err) {
      console.error(err);
    }  
  };

  return (
    <div {...props}>
      <form
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <TextField
          error={Boolean(formik.touched.name && formik.touched.email && formik.errors.email)}
          fullWidth
          helperText={formik.touched.name}
          label="Full Name"
          margin="dense"
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          value={formik.values.name}
        />
        <TextField
          error={Boolean(formik.touched.name && formik.touched.email && formik.errors.email)}
          fullWidth
          helperText={formik.touched.email && formik.errors.email}
          label="Email Address"
          margin="dense"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          value={formik.values.email}
        />
        <TextField
          error={Boolean(formik.touched.name && formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label="Password"
          margin="dense"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
        />
        <FormControl fullWidth 
        style={{marginTop:8, marginBottom: 4}}>
        <InputLabel id="demo-multiple-name-label">Role</InputLabel>
        <Select
          error={Boolean( formik.touched.name && formik.touched.role && formik.errors.role)}
          fullWidth
          margin="dense"
          name="role"
          type="text"
          label="Role"
          helperText={formik.touched.role && formik.errors.role}
          value={formik.values.role}             
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          >
          <MenuItem value="" 
          disabled>
            <em>select your role</em>
          </MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Architect">Architect</MenuItem>
          <MenuItem value="Enterprise">Enterprise</MenuItem>
        </Select>
        </FormControl>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            ml: -1,
            mt: 2
          }}
        >
          <Checkbox
            checked={formik.values.policy}
            name="policy"
            onChange={formik.handleChange}
          />
          <Typography
            color="textSecondary"
            variant="body2"
          >
            I have read the
            {' '}
            <Link
              component="a"
              href="#"
            >
              Terms and Conditions
            </Link>
          </Typography>
        </Box>
        {Boolean(formik.touched.policy && formik.errors.policy) && (
          <FormHelperText error>
            {formik.errors.policy}
          </FormHelperText>
        )}
        {formik.errors.submit && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>
              {formik.errors.submit}
            </FormHelperText>
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <Button
            disabled={formik.isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </Box>
      </form>
    </div>
  );
};

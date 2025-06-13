import { useFormik } from 'formik';
import { AdminLoginSchema } from '../../utils/AdminLoginSchema';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useDoLoginMutation } from '../../redux/services/admin/api';
import { AdminResponseType } from '../../redux/services/admin/types';
import { showToast } from '../../utils/ErrorToast';

const initialValues = {
  Mobile: '',
  Password: '',
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [doLogin, { isLoading }] = useDoLoginMutation();

  const handleSuccess = async (res: AdminResponseType) => {
    if (res.success) {
      const token = await localStorage.setItem('adminToken', res.data.token);
      if (token !== null || undefined) {
        navigate('/admin/home');
      }
    } else {
      showToast(res?.data?.message, 'error');
    }
  };
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: AdminLoginSchema,
      onSubmit: values => {
        doLogin({
          mobileNumber: values?.Mobile,
          password: values?.Password,
        })
          .unwrap()
          .then(handleSuccess)
          .catch(err => showToast('Something went wrong', 'error'));
      },
    });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 sm:mt-0 ">
      <div className="flex flex-col items-center justify-center px-6 py-8  mt-12 ">
        <Link to="/"><img
          src={require('../../assets/logo2.png')}
          className=" h-9 sm:h-16"
          alt=""
        /></Link>

        <div className=" bg-white rounded-lg shadow dark:border w-full sm:w-96 dark:bg-gray-800 dark:border-gray-700 h-80 mt-2">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Onest">
                  {t('adminPanel.login.phoneNumber')}
                </label>
                <input
                  type="text"
                  maxLength={10}
                  name="Mobile"
                  id="mobile"
                  className="bg-gray-50 border font-Onest border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Mobile number"
                  onChange={handleChange}
                  value={values.Mobile}
                  onBlur={handleBlur}
                />
                {errors.Mobile && touched.Mobile ? (
                  <p className="text-red-500 font-Onest text-xs mt-1">
                    {errors.Mobile}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium font-Onest text-gray-900 dark:text-white">
                  {t('adminPanel.login.password')}
                </label>
                <input
                  type="password"
                  name="Password"
                  id="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  value={values.Password}
                  onBlur={handleBlur}
                  className="bg-gray-50 border font-Onest border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.Password && touched.Password ? (
                  <p className="text-red-500 font-Onest text-xs mt-1">
                    {errors.Password}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white bg-red-500   focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                {isLoading ? 'Loading...' : t('adminPanel.login.login')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./screens/SplashScreen";
import Home from "./screens/Home";
import ResetPassword from "./screens/ResetPassword";
import InterestSpecificity from "./screens/InterestSpecificity";
import Onboarding from "./screens/Onboarding";
import EnterInterests from "./screens/EnterInterests";
import AccountCreated from "./screens/AccountCreated";
import SignIn from "./screens/SignIn";
import Store from "./screens/Store";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import SignUp from "./screens/SignUp";
import OTP from "./screens/OTP";
import Search from "./screens/Search";
import Cart from "./screens/Cart";
import Shipping from "./screens/Shipping";
import CartPreview from "./screens/CartPreview";
import CartdeleteItem from "./screens/CartdeleteItem";
import Onboarding3 from "./screens/Onboarding3";
import EnterInterests1 from "./screens/EnterInterests1";
import StoreResults from "./screens/StoreResults";
import PaymentMethod from "./screens/PaymentMethod";
import OrderReview from "./screens/OrderReview";
import PaymentSuccessful from "./screens/PaymentSuccessful";
import OrderFailed from "./screens/OrderFailed";
import UserProfile from "./screens/UserProfile";
import TrackingOrder from "./screens/TrackingOrder";
import OrderProcessing from "./screens/OrderProcessing";
import Wallet from "./screens/Wallet";
import FundWallet from "./screens/FundWallet";
import Amount from "./screens/Amount";
import SavedCards from "./screens/SavedCards";
import SendMoneycontacts from "./screens/SendMoneycontacts";
import SendMoneyEnterAmount from "./screens/SendMoneyEnterAmount";
import TransactionPin from "./screens/TransactionPin";
import PaymentMethod1 from "./screens/PaymentMethod1";
import AddNewCard from "./screens/AddNewCard";
import AddNewCard1 from "./screens/AddNewCard1";
import SelectCard from "./screens/SelectCard";
import SentSuccessfully from "./screens/SentSuccessfully";
import WithdrawToBank from "./screens/WithdrawToBank";
import InTransit from "./screens/InTransit";
import InTransitArrivedLocalWareh from "./screens/InTransitArrivedLocalWareh";
import InTransit1 from "./screens/InTransit1";
import InTransit2 from "./screens/InTransit2";
import InviteFriends from "./screens/InviteFriends";
import PersonalInformation from "./screens/PersonalInformation";
import UserProfileProfileDetails from "./screens/UserProfileProfileDetails";
import ChangePassword from "./screens/ChangePassword";
import UserProfile1 from "./screens/UserProfile1";
import TransactionPin1 from "./screens/TransactionPin1";
import ManageOrders from "./screens/ManageOrders";
import ManageOrders1 from "./screens/ManageOrders1";
import ManageOrders2 from "./screens/ManageOrders2";
import ExchangeRates from "./screens/ExchangeRates";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const SplashScreen = () => {
    return <SplashScreen />;
  };
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InterestSpecificity"
              component={InterestSpecificity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterInterests"
              component={EnterInterests}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountCreated"
              component={AccountCreated}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Store"
              component={Store}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTP"
              component={OTP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Shipping"
              component={Shipping}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartPreview"
              component={CartPreview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartdeleteItem"
              component={CartdeleteItem}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterInterests1"
              component={EnterInterests1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StoreResults"
              component={StoreResults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderReview"
              component={OrderReview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentSuccessful"
              component={PaymentSuccessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderFailed"
              component={OrderFailed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrackingOrder"
              component={TrackingOrder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderProcessing"
              component={OrderProcessing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet"
              component={Wallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FundWallet"
              component={FundWallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Amount"
              component={Amount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SavedCards"
              component={SavedCards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendMoneycontacts"
              component={SendMoneycontacts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendMoneyEnterAmount"
              component={SendMoneyEnterAmount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionPin"
              component={TransactionPin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethod1"
              component={PaymentMethod1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewCard"
              component={AddNewCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewCard1"
              component={AddNewCard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectCard"
              component={SelectCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SentSuccessfully"
              component={SentSuccessfully}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WithdrawToBank"
              component={WithdrawToBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InTransit"
              component={InTransit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InTransitArrivedLocalWarehouse"
              component={InTransitArrivedLocalWareh}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InTransit1"
              component={InTransit1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InTransit2"
              component={InTransit2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InviteFriends"
              component={InviteFriends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInformation"
              component={PersonalInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfileProfileDetails"
              component={UserProfileProfileDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserProfile1"
              component={UserProfile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionPin1"
              component={TransactionPin1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageOrders"
              component={ManageOrders}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageOrders1"
              component={ManageOrders1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageOrders2"
              component={ManageOrders2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExchangeRates"
              component={ExchangeRates}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;

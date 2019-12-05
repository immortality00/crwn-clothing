import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/Sign-in-up/Sign-in-up";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout";
import { checkUserSession } from "./redux/user/user-actions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

import { ref } from "vue";

export function useToggle() {
  let darkActive = ref(null);
  const toggleDarkmode = () => {
    const activeTheme = localStorage.getItem("user-theme");

    if (activeTheme === "lightmode") {
      //console.log("lightmode");
      localStorage.setItem("user-theme", "darkmode");
      document.documentElement.className = "darkmode";
      darkActive.value = true;
      console.log("darkmode is" + darkActive.value);
    } else {
      //console.log("darkmode");
      localStorage.setItem("user-theme", "lightmode");
      document.documentElement.className = "lightmode";
      darkActive.value = null;
      console.log("darkmode is" + darkActive.value);
    }
  };

  const onStart = () => {
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "darkmode") {
      document.documentElement.className = "darkmode";
      darkActive.value = true;
      console.log("darkmode is" + darkActive.value);
    } else {
      document.documentElement.className = "lightmode";
    }
  };

  // const useModePref = () => {
  //   const value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   console.log("to od useModePref" + value);
  //   if (value) {
  //     // return "darkmode";
  //     document.documentElement.className = "darkmode";
  //   } else {
  //     // return "lightmode";
  //     document.documentElement.className = "lightmode";
  //   }
  // };

  return {
    darkActive,
    toggleDarkmode,
    onStart,
  };
}
//pobierz media i pobierz z local storage -
//wtedy wykorzystaj funkcje ustawiającą klasę dark mode dla html
//przy togglowaniu też wykorzystaj funkcję ustawiającą klasę dla html

import os
import requests
import streamlit as st


EXPRESS_URL = os.getenv("EXPRESS_URL", "http://localhost:3000")


st.set_page_config(page_title="CSA Demo: Streamlit + Express", page_icon="🤝")
st.title("CSA Demo: Streamlit + Express")


name = st.text_input("Your name", "Steven")
if st.button("Say hello"):
  try:
    r = requests.get(f"{EXPRESS_URL}/hello", params={"name": name}, timeout=5)
    r.raise_for_status()
    st.success(r.json())
  except Exception as e:
    st.error(f"Request failed: {e}")

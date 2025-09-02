import React from "react";

const CheckoutMain = () => {
  return (
    <form className="py-100px px-100px flex  ">
      <div className="px-75px w-1/2 flex flex-col gap-9">
        <h1 className="font-semibold text-[36px] ">Billing details</h1>
        <div className="flex flex-col gap-6 ">
          <div className="flex gap-8">
            <div className="flex flex-1 flex-col gap-5.5 ">
              <label className="font-medium  text-[16px]">First Name</label>
              <input
                required
                className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
                type="text"
              />
            </div>
            <div className="flex flex-1 flex-col gap-5.5 ">
              <label className="font-medium  text-[16px]">Last Name</label>
              <input
                required
                className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">
              Company Name(Optional)
            </label>
            <input
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">Country/Region</label>
            <select
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              name=""
              id=""
            >
              <option value="">Sri lanka</option>
            </select>
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">Street address</label>
            <input
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">Town / City</label>
            <input
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">Province</label>
            <select
              required
              className="border-1 px-27px border-[#9F9F9F] rounded-[10px] h-[75px]"
              name=""
              id=""
            >
              <option value="">Sri lanka</option>
            </select>
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">ZIP Code</label>
            <input
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">ZIP Code</label>
            <input
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="phone"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <label className="font-medium text-[16px]">Email address</label>
            <input
              required
              className="border-1 border-[#9F9F9F] rounded-[10px] h-[75px]"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-5.5 ">
            <textarea
              required
              placeholder="Additional information"
              className="border border-[#9F9F9F] rounded-[10px] h-[75px] w-full 
              placeholder:text-left 
             flex items-center justify-center p-5 pr-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="flex w-1/2 py-87px px-38px gap-8 flex-col items-start">
        <div className="w-full flex flex-col gap-3">
          <div className=" flex font-medium text-[24px] justify-between">
            <div>Product</div>
            <div>SubTotal</div>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div>Asgaard sofa</div>x<div>1</div>
            </div>
            <div>Rs. 250,000.00</div>
          </div>
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>Rs. 250,000.00</div>
          </div>
          <div className="flex justify-between">
            <div>Total</div>
            <div className="font-bold text-[24px] text-[#B88E2F]">
              Rs. 250,000.00
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] h-[1px] w-full"></div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <li>Direct Bank Transfer</li>
            <div className="text-[#9F9F9F] flex flex-col gap-4">
              <p className="">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="flex flex-col">
                <label className="flex gap-3" htmlFor="">
                  <input type="radio" name="cash" required />
                  Direct Bank Transfer
                </label>
                <label className="flex gap-3" htmlFor="">
                  <input type="radio" name="cash" required />
                  Cash On Delivery
                </label>
              </div>
            </div>
            <p className="text-left">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="border-1 px-100px rounded-[20px] py-17px">
              Place order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutMain;

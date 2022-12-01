@extends('layouts/guest')
        <!-- <x-slot name="logo">
            <a href="/">
                <img src="{{ asset('/img/AMTA EXPO.png') }}" alt="logo" class="logo">
            </a>
        </x-slot> -->
@section('register')


        <form id="register" method="POST" action="{{ route('register') }}">
            @csrf

            <!-- Name -->
            <label class="title" for="name" :value="__('Name')">Name</label>
            <br>
            <input class="input" type="text" name="name" :value="old('name')" required autofocus />


            <br>
            <!-- Email Address -->
            <label class="title" for="email" :value="__('Email')">Email</label>
            <br>
            <input class="input" type="email" name="email" :value="old('email')" required />

            <br>
            <!-- Password -->
            <label class="title" for="password" :value="__('Password')">Password</label>
            <br>
            <input class="input" type="password" name="password" required autocomplete="new-password" />

            <br>
            <!-- Confirm Password -->
            <label class="title" for="password_confirmation" :value="__('Confirm Password')">Confirm Password</label>
            <br>
            <input class="input" type="password" name="password_confirmation" required />


            <br>
            <div id="cont">
            <!-- Button Submit Registrations -->
                <button id="btn" type="submit">
                    {{ __('Register') }}
                </button>

            
                <a id="sugest-auth" href="{{ route('login') }}">{{ __('Already registered?') }}
                </a>
            </div>
             
        </form>
    
@endsection

import React, { useState } from "react";
import {
    Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UserPlus, Mail, Lock, User, CheckCircle, AlertCircle } from "lucide-react";
import UserCard from "./UsrCard";

function SignUp() {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [submitted, setsubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!formData.email.includes('@')) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setsubmitted(true);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md">
                {!submitted ? (
                    <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                        <CardHeader className="text-center pb-8">
                            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <UserPlus className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Create Account
                            </CardTitle>
                            <p className="text-gray-600 mt-2">Join us today and get started!</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        Full Name
                                    </Label>
                                    <Input
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className={`transition-all duration-200 ${errors.name ? 'border-red-500 focus:border-red-500' : 'focus:border-purple-500'} hover:border-purple-300`}
                                        required
                                    />
                                    {errors.name && (
                                        <div className="flex items-center gap-1 text-red-500 text-sm">
                                            <AlertCircle className="h-4 w-4" />
                                            {errors.name}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        Email Address
                                    </Label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={`transition-all duration-200 ${errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-purple-500'} hover:border-purple-300`}
                                        required
                                    />
                                    {errors.email && (
                                        <div className="flex items-center gap-1 text-red-500 text-sm">
                                            <AlertCircle className="h-4 w-4" />
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Lock className="h-4 w-4" />
                                        Password
                                    </Label>
                                    <Input
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter a secure password"
                                        minLength={6}
                                        className={`transition-all duration-200 ${errors.password ? 'border-red-500 focus:border-red-500' : 'focus:border-purple-500'} hover:border-purple-300`}
                                        required
                                    />
                                    {errors.password && (
                                        <div className="flex items-center gap-1 text-red-500 text-sm">
                                            <AlertCircle className="h-4 w-4" />
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                <Button 
                                    type="submit"
                                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                                >
                                    <UserPlus className="h-5 w-5 mr-2" />
                                    Create Account
                                </Button>
                            </form>

                            <div className="text-center pt-4 border-t">
                                <p className="text-sm text-gray-600">
                                    Already have an account? 
                                    <span className="text-purple-600 hover:text-purple-700 cursor-pointer font-medium ml-1">
                                        Sign in
                                    </span>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <UserCard name={formData.name} email={formData.email} />
                )}
            </div>
        </div>
    )
}

export default SignUp